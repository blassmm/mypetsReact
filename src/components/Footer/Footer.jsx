import "./footer.css";

import BackgroundImage from "../../resources/logo-mobile.png";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import FooterViewMobile from "./FooterViewMobile";
import FooterViewResponsive from "./FooterViewResponsive";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Inicializa el estado
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <footer>
      {isMobile ? (
        <FooterViewMobile
          faFacebook={faFacebook}
          faTiktok={faTiktok}
          faInstagram={faInstagram}
          faEnvelope={faEnvelope}
          faArrowRight={faArrowRight}
          BackgroundImage={BackgroundImage}
        />
      ) : (
        <FooterViewResponsive
          faFacebook={faFacebook}
          faTiktok={faTiktok}
          faInstagram={faInstagram}
          faEnvelope={faEnvelope}
          faArrowRight={faArrowRight}
          BackgroundImage={BackgroundImage}
        />
      )}

      <hr />
      <p className="copyright">
        © {new Date().getFullYear()} My Pets. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   const [showContainer, setShowContainer] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 500) {
//         setShowContainer(false); // Elimina el contenedor si la pantalla es <= 500px
//       } else {
//         setShowContainer(true); // Restaura el contenedor si la pantalla es > 500px
//       }
//     };

//     // Agrega el listener al montar el componente
//     window.addEventListener("resize", handleResize);

//     // Ejecuta el listener inmediatamente para manejar la primera carga
//     handleResize();

//     // Limpia el listener al desmontar el componente
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <footer>
//       {showContainer ? (
//         <FooterViewMobile
//           faFacebook={faFacebook}
//           faTiktok={faTiktok}
//           faInstagram={faInstagram}
//           faEnvelope={faEnvelope}
//           faArrowRight={faArrowRight}
//           BackgroundImage={BackgroundImage}
//         />
//       ) : (
//         <FotterViewResponsive
//           faFacebook={faFacebook}
//           faTiktok={faTiktok}
//           faInstagram={faInstagram}
//           faEnvelope={faEnvelope}
//           faArrowRight={faArrowRight}
//           BackgroundImage={BackgroundImage}
//         />
//       )}

//       <hr />
//       <p className="copyright">
//         © {new Date().getFullYear()} My Pets. All rights reserved.
//       </p>
//     </footer>
//   );
// };
