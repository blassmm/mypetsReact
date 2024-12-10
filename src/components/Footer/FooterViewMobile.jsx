import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db";

import Form from "./Form";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const FooterViewMobile = ({
  BackgroundImage,
  faFacebook,
  faTiktok,
  faInstagram,
  faEnvelope,
  faArrowRight,
}) => {
  const [dataForm, setDataForm] = useState([]);
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChangeInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const timestamp = Timestamp.now();

    try {
      await addDoc(collection(db, "emails"), { email, timestamp });
      console.log(
        "Correo guardado en Firestore con timestamp:",
        email,
        timestamp
      );

      // Actualiza el estado local con el email y timestamp
      setDataForm((prevDataForm) => [...prevDataForm, { email, timestamp }]);
      setEmail(""); // Limpia el input

      // Muestra el mensaje y lo oculta después de 2 segundos
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    } catch (error) {
      console.error("Error al guardar el correo:", error);
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(".icons-container", {
      opacity: 0, // Comienza con opacidad 0
      y: 50, // Comienza desplazado hacia abajo
    }, {
      opacity: 1, // Se vuelve completamente visible al entrar en el viewport
      y: 0, // El texto vuelve a su posición original
      duration: 1.8,
      ease: "bounce.out", // Easing con rebote
      scrollTrigger: {
        trigger: ".icons-container",
        start: "top 100%", // La animación comienza cuando el 80% del elemento entra al viewport
        end: "top 20%", // La animación termina cuando el 20% del elemento sale del viewport
        toggleActions: "play none none reverse", // Reproduce la animación al entrar y la revierte al salir
        
      },
    });
  });

  return (
    <div className="wrapper-minsize">
      <div className="icons-container">
        <FontAwesomeIcon className="footer-icons" icon={faFacebook} size="3x" />
        <FontAwesomeIcon className="footer-icons" icon={faTiktok} size="3x" />
        <FontAwesomeIcon
          className="footer-icons"
          icon={faInstagram}
          size="3x"
        />
      </div>
      <div className="container-input">
        <h3>Recibe Novedades</h3>
        <Form
          handleSubmitForm={handleSubmitForm}
          faEnvelope={faEnvelope}
          email={email}
          handleChangeInput={handleChangeInput}
          showMessage={showMessage}
          faArrowRight={faArrowRight}
        />
      </div>
      <div className="col-mobile">
        <div
          className="logo2"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}
        ></div>
        <p>
          Trabajamos incansablemente para ayudar a los corazones de familias y
          mascotas. Si deseas brindarnos tu apoyo no dudes en contactarnos!
        </p>
        <br />
      </div>
    </div>
  );
};

export default FooterViewMobile;
