import React from "react";

import "./index.css";

import logoImg from "../../assets/icons/Logo.svg";

export default function MobileHeader({}) {
  return (
    <>
      <div className="mobile">
        <div className="container">
          <div className="pages">
            <nav className="mobile-navbar">
              <ul className="mobile-pages-list">
                <li>
                  <a href="">Курсы</a>
                </li>
                <li>
                  <a href="">Школы</a>
                </li>
                <li>
                  <a href="">Отзывы о школах</a>
                </li>
                <li>
                  <a href="">Акции школ</a>
                </li>
                <li>
                  <a href="">Блог </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function MobileHeader({ onClose }) {
//   const [isFixed, setIsFixed] = useState(true);

//   return (
//     <>
//       {isFixed && (
//         <div className="mobile header-wrap container">
//           <div className="pages">
//             <nav className="navbar">
//               <ul className="pages-list">
//                 <li>
//                   <a href="#priorty" className="pages-link" onClick={onClose}>
//                     Услуги
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#our-service"
//                     className="pages-link"
//                     onClick={onClose}
//                   >
//                     Проекты
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#our-work" className="pages-link" onClick={onClose}>
//                     О нас
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#contact" className="pages-link" onClick={onClose}>
//                     Контакты
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <button className="cost">Связаться с нами</button>
//         </div>
//       )}
//     </>
//   );
// }

/*











*/
