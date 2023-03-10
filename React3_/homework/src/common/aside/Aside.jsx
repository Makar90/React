import Container from "../container/Container";
import './index.css';

function Aside(){
    return(
        <aside className="aside">
            <div className="aside__container">
                <li className="aside__item">
                    <svg className="aside__item-icon" fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="9" height="11" rx="2"></rect>
                        <rect x="13" y="2" width="9" height="7" rx="2"></rect>
                        <rect x="2" y="15" width="9" height="7" rx="2"></rect>
                        <rect x="13" y="11" width="9" height="11" rx="2"></rect>
                    </svg>
                    <p className="aside__item-title">Dashboards</p>
                </li>
                <li className="aside__item">
                    <svg className="aside__item-icon" fill="currentColor" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 512 512">
                        <g>
                            <path d="M406.195,383.984c-8.391,15.734-19.922,28.859-34.516,39.609c-14.656,10.719-32.188,18.703-52.563,23.969
                                c-8.906,2.25-18.234,3.813-27.703,5.094V512h-70.828v-58.156c-20.172-1.703-39.453-4.844-57.609-9.844
                                c-27.719-7.594-64.016-38.25-64.016-38.25c-3.109-1.813-5.172-5-5.609-8.531c-0.453-3.563,0.766-7.156,3.313-9.688l35.484-35.5
                                c3.828-3.781,9.766-4.5,14.359-1.688c0,0,26.563,23.063,46.688,28.563c20.125,5.469,40.094,8.219,60.016,8.219
                                c25.125,0,45.891-4.438,62.359-13.313c16.5-8.938,24.719-22.75,24.719-41.625c0-13.594-4.031-24.313-12.172-32.188
                                c-8.109-7.813-21.828-12.734-41.188-14.891l-63.563-5.469c-37.641-3.672-66.672-14.172-87.063-31.375
                                c-20.453-17.266-30.609-43.453-30.609-78.453c0-19.375,3.906-36.625,11.766-51.797c7.875-15.172,18.563-27.984,32.172-38.422
                                c13.594-10.469,29.438-18.313,47.469-23.531c7.547-2.188,15.453-3.625,23.484-4.938V0h70.828v50.094
                                c16.531,1.625,32.266,4.281,46.906,8.313c24.844,6.781,50.938,27.188,50.938,27.188c3.266,1.688,5.484,4.875,6.047,8.5
                                c0.563,3.688-0.641,7.313-3.219,9.969l-33.281,33.781c-3.547,3.594-9.031,4.531-13.563,2.188c0,0-19.703-14.031-36.734-18.469
                                c-17.016-4.438-34.891-6.688-53.719-6.688c-24.609,0-42.797,4.719-54.531,14.109c-11.781,9.453-17.625,21.734-17.625,36.875
                                c0,13.641,4.109,24.078,12.531,31.359c8.359,7.344,22.469,12.109,42.359,14.125l55.703,4.75
                                c41.297,3.656,72.563,14.625,93.734,32.922c21.203,18.328,31.781,45.016,31.781,80.016
                                C418.742,350.016,414.554,368.281,406.195,383.984z"/>
                        </g>
                    </svg>
                    <p className="aside__item-title">Sales</p>
                </li>
                <li className="aside__item">
                    <svg className="aside__item-icon" fill="currentColor" height="800px" width="800px" version="1.1" id="Filled_Icons" xmlns="http://www.w3.org/2000/svg" x="0px"
                        y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
                        <g id="Gallery-Filled">
                            <path d="M8,6c0,1.1-0.9,2-2,2S4,7.1,4,6s0.9-2,2-2S8,4.9,8,6z"/>
                            <path d="M0,0v19h20V0H0z M18,2v10.8L13.99,8L10,13l-3-3l-5,5.83V2H18z"/>
                            <path d="M24,23H5v-2h17V5h2V23z"/>
                        </g>
                    </svg>
                    <p className="aside__item-title">Catalog</p>
                </li>                
                <li className="aside__item">
                    <svg className="aside__item-icon" width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="users" fill="currentColor">
                            <path d="M8,13 C6.34314575,13 5,11.6568542 5,10 C5,8.34314575 6.34314575,7 8,7 C9.65685425,7 11,8.34314575 11,10 C11,11.6568542 9.65685425,13 8,13 Z M16,13 C14.3431458,13 13,11.6568542 13,10 C13,8.34314575 14.3431458,7 16,7 C17.6568542,7 19,8.34314575 19,10 C19,11.6568542 17.6568542,13 16,13 Z M8,15 C10.3893851,15 12.5341111,16.0475098 14,17.7083512 C14,18.1839232 14,18.6144728 14,19 L2,19 C2,18.6144728 2,18.1839232 2,17.7083512 C3.46588891,16.0475098 5.61061495,15 8,15 Z M16,19 L16,16.9519717 L15.4994784,16.3848843 C15.1151403,15.949432 14.6965808,15.550843 14.2491048,15.1921858 C14.8126186,15.0663701 15.3985585,15 16,15 C18.3893851,15 20.5341111,16.0475098 22,17.7083512 L22,19 L16,19 Z" id="Shape">
                            </path>
                        </g>
                    </g>
                    </svg>
                    <p className="aside__item-title">Customers</p>
                </li>
                <li className="aside__item">
                    <svg className="aside__item-icon" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8.5H12M7 12H15M9.68375 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V20.3355C3 20.8684 3 21.1348 3.10923 21.2716C3.20422 21.3906 3.34827 21.4599 3.50054 21.4597C3.67563 21.4595 3.88367 21.2931 4.29976 20.9602L6.68521 19.0518C7.17252 18.662 7.41617 18.4671 7.68749 18.3285C7.9282 18.2055 8.18443 18.1156 8.44921 18.0613C8.74767 18 9.0597 18 9.68375 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="aside__item-title">Reviews</p>
                </li>
                
            </div>
        </aside>
    );
}

export default Aside;