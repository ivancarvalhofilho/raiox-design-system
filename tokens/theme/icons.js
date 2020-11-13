"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var icons = {
  phone: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.80729 6.05208C3.39063 7.17014 4.11371 8.16059 4.97656 9.02344C5.83941 9.88629 6.82986 10.6094 7.94792 11.1927L9.66146 9.47917C9.90452 9.26042 10.1719 9.19965 10.4635 9.29688C11.3385 9.58854 12.2621 9.73438 13.2344 9.73438C13.4531 9.73438 13.6354 9.80729 13.7812 9.95312C13.9271 10.099 14 10.2812 14 10.5V13.2344C14 13.4531 13.9271 13.6354 13.7812 13.7812C13.6354 13.9271 13.4531 14 13.2344 14C9.4913 13.9028 6.37414 12.6085 3.88281 10.1172C1.39148 7.62586 0.0972227 4.5087 0 0.765625C0 0.546874 0.0729159 0.364584 0.21875 0.21875C0.364584 0.0729159 0.546874 0 0.765625 0H3.5C3.71875 0 3.90104 0.0729159 4.04688 0.21875C4.19271 0.364584 4.26562 0.546874 4.26562 0.765625C4.26562 1.73785 4.41146 2.66145 4.70312 3.53646C4.80035 3.82813 4.73958 4.09549 4.52083 4.33854L2.80729 6.05208Z\"/></svg>",
  interrogation: "<svg width=\"13\" height=\"22\" viewBox=\"0 0 13 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.26254 18.3451H7.47198V21.5H4.26254V18.3451ZM6.41888 0.5C8.25762 0.565728 9.77876 1.15728 10.9823 2.27465C12.0855 3.32629 12.6706 4.64084 12.7375 6.21831C12.8378 7.79577 12.3363 9.27465 11.233 10.6549C10.9322 11.0164 10.3972 11.4765 9.62832 12.0352C8.92625 12.5939 8.45821 13.0047 8.22419 13.2676C7.88987 13.662 7.67257 14.1385 7.57227 14.6972C7.50541 15.0258 7.47198 15.5516 7.47198 16.2746H4.26254C4.26254 15.1244 4.29597 14.3192 4.36283 13.8592C4.46313 13.0704 4.68043 12.446 5.01475 11.9859C5.21534 11.6573 5.51622 11.3286 5.9174 11C6.15143 10.8357 6.50246 10.6056 6.9705 10.3099C7.47198 9.98122 7.82301 9.75117 8.0236 9.61972C8.85939 8.83099 9.36087 7.99296 9.52802 7.10563C9.69518 6.18545 9.49459 5.39671 8.92625 4.73944C8.39135 4.08216 7.55556 3.72066 6.41888 3.65493C5.51622 3.65493 4.7473 3.96714 4.11209 4.59155C3.51032 5.1831 3.20944 5.92253 3.20944 6.80986H0C0 5.65962 0.284169 4.60798 0.852507 3.65493C1.42085 2.66901 2.18977 1.89671 3.15929 1.33803C4.16224 0.779343 5.24877 0.5 6.41888 0.5Z\"/></svg>",
  back: "<svg width='32' height='32' viewBox='0 0 32 32'><g fill='none' fill-rule='evenodd'><polygon fill='#FFF' fill-rule='nonzero' points='11 22.12 17.181 16 11 9.88 12.903 8 21 16 12.903 24' transform='matrix(-1 0 0 1 32 0)' /><polygon points='0 0 32 0 32 32 0 32' /></g></svg>",
  add: "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" ><path d=\"M5.75822 4.34507H4.34507V5.75822H3.65493V4.34507H2.24178V3.65493H3.65493V2.24178H4.34507V3.65493H5.75822V4.34507ZM4 0.5C3.53991 0.5 3.09077 0.587637 2.65258 0.762911C2.22535 0.938185 1.84742 1.19014 1.51878 1.51878C1.19014 1.84742 0.938185 2.23083 0.762911 2.66901C0.587637 3.09624 0.5 3.53991 0.5 4C0.5 4.46009 0.587637 4.90923 0.762911 5.34742C0.938185 5.77465 1.19014 6.15258 1.51878 6.48122C1.84742 6.80986 2.22535 7.06182 2.65258 7.23709C3.09077 7.41236 3.53991 7.5 4 7.5C4.46009 7.5 4.90376 7.41236 5.33099 7.23709C5.76917 7.06182 6.15258 6.80986 6.48122 6.48122C6.80986 6.15258 7.06182 5.77465 7.23709 5.34742C7.41236 4.90923 7.5 4.46009 7.5 4C7.5 3.53991 7.41236 3.09624 7.23709 2.66901C7.06182 2.23083 6.80986 1.84742 6.48122 1.51878C6.15258 1.19014 5.76917 0.938185 5.33099 0.762911C4.90376 0.587637 4.46009 0.5 4 0.5Z\"/></svg>",
  search: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" ><path d=\"M5.21716 0C6.14298 0 7.00626 0.237712 7.80697 0.713137C8.60769 1.16354 9.23324 1.7891 9.68365 2.58981C10.1591 3.39053 10.3968 4.26631 10.3968 5.21716C10.3968 6.4933 9.98391 7.6193 9.15818 8.59517L9.38338 8.82038H10.0214L14 12.7989L12.7989 14L8.82038 10.0214V9.38338L8.59517 9.15818C7.6193 9.98391 6.4933 10.3968 5.21716 10.3968C4.26631 10.3968 3.39053 10.1716 2.58981 9.72118C1.7891 9.24576 1.15103 8.60769 0.675603 7.80697C0.225201 7.00626 0 6.14298 0 5.21716C0 4.26631 0.225201 3.39053 0.675603 2.58981C1.15103 1.7891 1.7891 1.16354 2.58981 0.713137C3.39053 0.237712 4.26631 0 5.21716 0ZM5.21716 1.61394C4.21626 1.61394 3.3655 1.96425 2.66488 2.66488C1.96425 3.3655 1.61394 4.21626 1.61394 5.21716C1.61394 6.21805 1.96425 7.06881 2.66488 7.76944C3.3655 8.47006 4.21626 8.82038 5.21716 8.82038C6.21805 8.82038 7.06881 8.47006 7.76944 7.76944C8.47006 7.06881 8.82038 6.21805 8.82038 5.21716C8.82038 4.21626 8.47006 3.3655 7.76944 2.66488C7.06881 1.96425 6.21805 1.61394 5.21716 1.61394Z\"/></svg>",
  danger: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" ><path d=\"M7.69014 7.69014H6.30986V3.48357H7.69014V7.69014ZM7.69014 10.5164H6.30986V9.10329H7.69014V10.5164ZM7 0C6.07981 0 5.18153 0.175274 4.30516 0.525822C3.4507 0.876369 2.69484 1.38028 2.03756 2.03756C1.38028 2.69484 0.876369 3.46166 0.525822 4.33803C0.175274 5.19249 0 6.07981 0 7C0 7.92019 0.175274 8.81847 0.525822 9.69484C0.876369 10.5493 1.38028 11.3052 2.03756 11.9624C2.69484 12.6197 3.4507 13.1236 4.30516 13.4742C5.18153 13.8247 6.07981 14 7 14C7.92019 14 8.80751 13.8247 9.66197 13.4742C10.5383 13.1236 11.3052 12.6197 11.9624 11.9624C12.6197 11.3052 13.1236 10.5493 13.4742 9.69484C13.8247 8.81847 14 7.92019 14 7C14 6.07981 13.8247 5.19249 13.4742 4.33803C13.1236 3.46166 12.6197 2.69484 11.9624 2.03756C11.3052 1.38028 10.5383 0.876369 9.66197 0.525822C8.80751 0.175274 7.92019 0 7 0Z\"/></svg>",
  question: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" ><path d=\"M9.13615 6.47418L8.51174 7.13146C8.22692 7.41628 8.02973 7.67919 7.92019 7.92019C7.76682 8.22692 7.69014 8.62128 7.69014 9.10329H6.30986V8.74178C6.30986 7.97496 6.58372 7.31768 7.13146 6.76995L7.98592 5.88263C8.27074 5.61972 8.41315 5.29108 8.41315 4.89671C8.41315 4.50235 8.27074 4.17371 7.98592 3.9108C7.723 3.62598 7.39437 3.48357 7 3.48357C6.60563 3.48357 6.26604 3.62598 5.98122 3.9108C5.71831 4.17371 5.58685 4.50235 5.58685 4.89671H4.20657C4.20657 4.12989 4.48044 3.47261 5.02817 2.92488C5.5759 2.37715 6.23318 2.10329 7 2.10329C7.76682 2.10329 8.4241 2.37715 8.97183 2.92488C9.51956 3.47261 9.79343 4.12989 9.79343 4.89671C9.79343 5.51017 9.57434 6.03599 9.13615 6.47418ZM7.69014 11.8967H6.30986V10.5164H7.69014V11.8967ZM7 0C6.07981 0 5.18153 0.175274 4.30516 0.525822C3.4507 0.876369 2.69484 1.38028 2.03756 2.03756C1.38028 2.69484 0.876369 3.46166 0.525822 4.33803C0.175274 5.19249 0 6.07981 0 7C0 7.92019 0.175274 8.81847 0.525822 9.69484C0.876369 10.5493 1.38028 11.3052 2.03756 11.9624C2.69484 12.6197 3.4507 13.1236 4.30516 13.4742C5.18153 13.8247 6.07981 14 7 14C7.92019 14 8.80751 13.8247 9.66197 13.4742C10.5383 13.1236 11.3052 12.6197 11.9624 11.9624C12.6197 11.3052 13.1236 10.5493 13.4742 9.69484C13.8247 8.81847 14 7.92019 14 7C14 5.72926 13.6823 4.55712 13.0469 3.48357C12.4335 2.41002 11.59 1.56651 10.5164 0.953052C9.44288 0.317684 8.27074 0 7 0Z\"/></svg>",
  'chevron-left': "<svg width=\"9\" height=\"14\" viewBox=\"0 0 9 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 12.3594L3.72785 7L9 1.64062L7.38608 0L0.5 7L7.38608 14L9 12.3594Z\"/></svg>",
  'chevron-right': "<svg width=\"9\" height=\"14\" viewBox=\"0 0 9 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.08049e-06 1.64063L5.27215 7L1.43428e-07 12.3594L1.61392 14L8.5 7L1.61393 3.51674e-07L1.08049e-06 1.64063Z\"/></svg>",
  'chevron-down': "<svg width=\"8\" height=\"5\" viewBox=\"0 0 8 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.67969 -2.70123e-07L4 2.63608L1.32031 -3.5857e-08L0.5 0.806962L4 4.25L7.5 0.806962L6.67969 -2.70123e-07Z\" /></svg>",
  'chevron-up': "<svg width=\"8\" height=\"5\" viewBox=\"0 0 8 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.32031 5L4 2.36392L6.67969 5L7.5 4.19304L4 0.75L0.5 4.19304L1.32031 5Z\" /></svg>",
  info: "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" ><path d=\"M4.34507 2.94836H3.65493V2.24178H4.34507V2.94836ZM4.34507 5.75822H3.65493V3.65493H4.34507V5.75822ZM4 0.5C3.53991 0.5 3.09077 0.587637 2.65258 0.762911C2.22535 0.938185 1.84742 1.19014 1.51878 1.51878C1.19014 1.84742 0.938185 2.23083 0.762911 2.66901C0.587637 3.09624 0.5 3.53991 0.5 4C0.5 4.46009 0.587637 4.90923 0.762911 5.34742C0.938185 5.77465 1.19014 6.15258 1.51878 6.48122C1.84742 6.80986 2.22535 7.06182 2.65258 7.23709C3.09077 7.41236 3.53991 7.5 4 7.5C4.46009 7.5 4.90376 7.41236 5.33099 7.23709C5.76917 7.06182 6.15258 6.80986 6.48122 6.48122C6.80986 6.15258 7.06182 5.77465 7.23709 5.34742C7.41236 4.90923 7.5 4.46009 7.5 4C7.5 3.53991 7.41236 3.09624 7.23709 2.66901C7.06182 2.23083 6.80986 1.84742 6.48122 1.51878C6.15258 1.19014 5.76917 0.938185 5.33099 0.762911C4.90376 0.587637 4.46009 0.5 4 0.5Z\"/></svg>",
  'check-rounded': "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 0C5.72926 0 4.55712 0.317684 3.48357 0.953052C2.41002 1.56651 1.55556 2.41002 0.920188 3.48357C0.306729 4.55712 0 5.72926 0 7C0 8.27074 0.306729 9.44288 0.920188 10.5164C1.55556 11.59 2.41002 12.4444 3.48357 13.0798C4.55712 13.6933 5.72926 14 7 14C8.27074 14 9.44288 13.6933 10.5164 13.0798C11.59 12.4444 12.4335 11.59 13.0469 10.5164C13.6823 9.44288 14 8.27074 14 7C14 5.72926 13.6823 4.55712 13.0469 3.48357C12.4335 2.41002 11.59 1.56651 10.5164 0.953052C9.44288 0.317684 8.27074 0 7 0ZM5.58685 10.5164L2.10329 7L3.0892 6.01408L5.58685 8.51174L10.9108 3.18779L11.8967 4.20657L5.58685 10.5164Z\"/></svg>",
  warning: "<svg width=\"8\" height=\"6\" viewBox=\"0 0 8 6\" fill=\"none\" ><path d=\"M4.31277 3.79259H3.68723V2.51852H4.31277V3.79259ZM4.31277 5.05185H3.68723V4.41481H4.31277V5.05185ZM0.5 6H7.5L4 0L0.5 6Z\"/></svg>",
  edit: "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" ><path d=\"M7.39062 2.06771C7.46354 1.99479 7.5 1.90365 7.5 1.79427C7.5 1.6849 7.46354 1.59375 7.39062 1.52083L6.47917 0.609375C6.40625 0.536458 6.3151 0.5 6.20573 0.5C6.09635 0.5 6.00521 0.536458 5.93229 0.609375L5.22135 1.32031L6.67969 2.77865L7.39062 2.06771ZM0.5 6.04167V7.5H1.95833L6.26042 3.19792L4.80208 1.73958L0.5 6.04167Z\"/></svg>",
  lock: "<svg width=\"6\" height=\"8\" viewBox=\"0 0 6 8\" fill=\"none\" ><path d=\"M3 5.84375C2.82456 5.84375 2.67349 5.78125 2.54678 5.65625C2.42982 5.52083 2.37135 5.35938 2.37135 5.17188C2.37135 4.98438 2.42982 4.82812 2.54678 4.70312C2.67349 4.56771 2.82456 4.5 3 4.5C3.17544 4.5 3.32164 4.56771 3.4386 4.70312C3.5653 4.82812 3.62865 4.98438 3.62865 5.17188C3.62865 5.35938 3.5653 5.52083 3.4386 5.65625C3.32164 5.78125 3.17544 5.84375 3 5.84375ZM4.87135 6.84375V3.5H1.12865V6.84375H4.87135ZM4.87135 2.84375C5.04678 2.84375 5.19298 2.91146 5.30994 3.04688C5.43665 3.17188 5.5 3.32292 5.5 3.5V6.84375C5.5 7.02083 5.43665 7.17188 5.30994 7.29688C5.19298 7.43229 5.04678 7.5 4.87135 7.5H1.12865C0.953216 7.5 0.802144 7.43229 0.675439 7.29688C0.55848 7.17188 0.5 7.02083 0.5 6.84375V3.5C0.5 3.32292 0.55848 3.17188 0.675439 3.04688C0.802144 2.91146 0.953216 2.84375 1.12865 2.84375H1.43567V2.17188C1.43567 1.95312 1.47466 1.74479 1.55263 1.54688C1.64035 1.33854 1.75731 1.15625 1.90351 1C2.04971 0.84375 2.2154 0.723958 2.40058 0.640625C2.59552 0.546875 2.79532 0.5 3 0.5C3.20468 0.5 3.39961 0.546875 3.5848 0.640625C3.77973 0.723958 3.95029 0.84375 4.09649 1C4.24269 1.15625 4.35478 1.33854 4.43275 1.54688C4.52047 1.74479 4.56433 1.95312 4.56433 2.17188V2.84375H4.87135ZM3 1.17188C2.73684 1.17188 2.51267 1.27083 2.32749 1.46875C2.15205 1.65625 2.06433 1.89062 2.06433 2.17188V2.84375H3.93567V2.17188C3.93567 1.89062 3.84308 1.65625 3.65789 1.46875C3.48246 1.27083 3.26316 1.17188 3 1.17188Z\"/></svg>",
  'checkbox-checked': "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" ><path d=\"M3.21615 5.95052L1.28385 4L1.83073 3.45312L3.21615 4.83854L6.16927 1.88542L6.71615 2.45052L3.21615 5.95052ZM6.71615 0.5H1.28385C1.0651 0.5 0.876736 0.578993 0.71875 0.736979C0.572917 0.882812 0.5 1.0651 0.5 1.28385V6.71615C0.5 6.9349 0.572917 7.12326 0.71875 7.28125C0.876736 7.42708 1.0651 7.5 1.28385 7.5H6.71615C6.9349 7.5 7.11719 7.42708 7.26302 7.28125C7.42101 7.12326 7.5 6.9349 7.5 6.71615V1.28385C7.5 1.0651 7.42101 0.882812 7.26302 0.736979C7.11719 0.578993 6.9349 0.5 6.71615 0.5Z\"/></svg>",
  'checkbox-outline': "<svg width=\"8\" height=\"8\" viewBox=\"0 0 8 8\" fill=\"none\" ><path d=\"M6.71615 0.5H1.28385C1.0651 0.5 0.876736 0.578993 0.71875 0.736979C0.572917 0.882812 0.5 1.0651 0.5 1.28385V6.71615C0.5 6.9349 0.572917 7.12326 0.71875 7.28125C0.876736 7.42708 1.0651 7.5 1.28385 7.5H6.71615C6.9349 7.5 7.11719 7.42708 7.26302 7.28125C7.42101 7.12326 7.5 6.9349 7.5 6.71615V1.28385C7.5 1.0651 7.42101 0.882812 7.26302 0.736979C7.11719 0.578993 6.9349 0.5 6.71615 0.5ZM6.71615 1.28385V6.71615H1.28385V1.28385H6.71615Z\"/></svg>",
  picture: "<svg width=\"8\" height=\"6\" viewBox=\"0 0 8 6\" fill=\"none\" ><path d=\"M6.80986 0.5C6.99609 0.5 7.15493 0.572707 7.28639 0.718121C7.42879 0.852349 7.5 1.01454 7.5 1.2047V4.7953C7.5 4.98546 7.42879 5.15324 7.28639 5.29866C7.15493 5.43289 6.99609 5.5 6.80986 5.5H1.19014C1.00391 5.5 0.839593 5.43289 0.697183 5.29866C0.565728 5.15324 0.5 4.98546 0.5 4.7953V1.2047C0.5 1.01454 0.565728 0.852349 0.697183 0.718121C0.839593 0.572707 1.00391 0.5 1.19014 0.5H6.80986ZM1.55164 4.42617H6.44836L4.87089 2.27852L3.65493 3.88926L2.76761 2.81544L1.55164 4.42617Z\"/></svg>",
  document: "<svg width=\"6\" height=\"8\" viewBox=\"0 0 6 8\" fill=\"none\" ><path d=\"M3.47807 2.94836V1.02582L5.46199 2.94836H3.47807ZM0.972953 0.5C0.771199 0.5 0.597466 0.571205 0.451754 0.713615C0.317251 0.84507 0.25 1.00391 0.25 1.19014V6.80986C0.25 6.99609 0.317251 7.15493 0.451754 7.28639C0.597466 7.42879 0.771199 7.5 0.972953 7.5H5.27705C5.4788 7.5 5.64693 7.42879 5.78143 7.28639C5.92714 7.15493 6 6.99609 6 6.80986V2.60329L3.84795 0.5H0.972953Z\" /></svg>",
  trash: "<svg width=\"6\" height=\"8\" viewBox=\"0 0 6 8\" fill=\"none\" ><path d=\"M5.75 0.882812H4.38423L3.97819 0.5H2.02181L1.61577 0.882812H0.25V1.66667H5.75V0.882812ZM0.637584 6.71615C0.637584 6.9349 0.711409 7.12326 0.85906 7.28125C1.01902 7.42708 1.20973 7.5 1.43121 7.5H4.56879C4.79027 7.5 4.97483 7.42708 5.12248 7.28125C5.28244 7.12326 5.36242 6.9349 5.36242 6.71615V2.04948H0.637584V6.71615Z\" /></svg>",
  'arrow-up': "<svg width=\"8\" height=\"4\" viewBox=\"0 0 8 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.5 3.75L4 0.25L7.5 3.75H0.5Z\"/></svg>",
  'arrow-down': "<svg width=\"8\" height=\"4\" viewBox=\"0 0 8 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M0.5 0.25L4 3.75L7.5 0.25H0.5Z\" /></svg>",
  'arrow-horizontal': "<svg width=\"6\" height=\"8\" viewBox=\"0 0 6 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.875 0.5L0 3.42578H5.75L2.875 0.5ZM0 4.57422L2.875 7.5L5.75 4.57422H0Z\" /></svg>",
  'close': "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 1.4094L12.5906 0L7 5.5906L1.4094 0L0 1.4094L5.5906 7L0 12.5906L1.4094 14L7 8.4094L12.5906 14L14 12.5906L8.4094 7L14 1.4094Z\" fill=\"#979899\"/></svg>",
  'clock': "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 12.6197C8.00782 12.6197 8.93897 12.3678 9.79343 11.8638C10.6698 11.3599 11.3599 10.6808 11.8638 9.82629C12.3678 8.94992 12.6197 8.00782 12.6197 7C12.6197 5.99218 12.3678 5.06103 11.8638 4.20657C11.3599 3.3302 10.6698 2.64006 9.79343 2.13615C8.93897 1.63224 8.00782 1.38028 7 1.38028C5.99218 1.38028 5.05008 1.63224 4.17371 2.13615C3.31925 2.64006 2.64006 3.3302 2.13615 4.20657C1.63224 5.06103 1.38028 5.99218 1.38028 7C1.38028 8.00782 1.63224 8.94992 2.13615 9.82629C2.64006 10.6808 3.31925 11.3599 4.17371 11.8638C5.05008 12.3678 5.99218 12.6197 7 12.6197ZM7 0C7.92019 0 8.80751 0.175274 9.66197 0.525822C10.5383 0.876369 11.3052 1.38028 11.9624 2.03756C12.6197 2.69484 13.1236 3.46166 13.4742 4.33803C13.8247 5.19249 14 6.07981 14 7C14 7.92019 13.8247 8.81847 13.4742 9.69484C13.1236 10.5493 12.6197 11.3052 11.9624 11.9624C11.3052 12.6197 10.5383 13.1236 9.66197 13.4742C8.80751 13.8247 7.92019 14 7 14C5.72926 14 4.55712 13.6933 3.48357 13.0798C2.41002 12.4444 1.55556 11.59 0.920188 10.5164C0.306729 9.44288 0 8.27074 0 7C0 6.07981 0.175274 5.19249 0.525822 4.33803C0.876369 3.46166 1.38028 2.69484 2.03756 2.03756C2.69484 1.38028 3.4507 0.876369 4.30516 0.525822C5.18153 0.175274 6.07981 0 7 0ZM7.3615 3.48357V7.16432L10.5164 9.03756L9.99061 9.92488L6.30986 7.69014V3.48357H7.3615Z\"/></svg>",
  loading: "<svg width=\"22\" height=\"18\" viewBox=\"0 0 22 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.5 9C0.5 10.625 0.890625 12.125 1.67188 13.5C2.48438 14.875 3.57812 15.9688 4.95312 16.7812C6.35938 17.5938 7.875 18 9.5 18C10.6875 18 11.8281 17.7812 12.9219 17.3438C14.0469 16.875 15.0312 16.2344 15.875 15.4219L14.375 13.9219C13.75 14.5781 13.0156 15.0938 12.1719 15.4688C11.3281 15.8125 10.4375 15.9844 9.5 15.9844C8 15.9844 6.65625 15.5781 5.46875 14.7656C4.375 13.9844 3.5625 12.9531 3.03125 11.6719C2.5 10.3906 2.34375 9.09375 2.5625 7.78125C2.8125 6.34375 3.46875 5.09375 4.53125 4.03125C5.59375 2.96875 6.84375 2.32812 8.28125 2.10938C9.59375 1.85938 10.8906 2 12.1719 2.53125C13.4531 3.0625 14.4688 3.875 15.2188 4.96875C16.0625 6.15625 16.4844 7.5 16.4844 9H13.4844L17.4688 12.9844H17.5625L21.5 9H18.5C18.5 7.375 18.0938 5.875 17.2812 4.5C16.4688 3.125 15.375 2.03125 14 1.21875C12.625 0.40625 11.125 0 9.5 0C7.875 0 6.35938 0.40625 4.95312 1.21875C3.57812 2.03125 2.48438 3.125 1.67188 4.5C0.890625 5.875 0.5 7.375 0.5 9Z\" fill=\"#979899\"/></svg>",
  whatsapp: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">  <path d=\"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z\"/></svg>",
  calendar: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.6111 2.4H11.9167V1H10.5278V2.4H4.97222V1H3.58333V2.4H2.88889C2.11806 2.4 1.50694 3.03 1.50694 3.8L1.5 13.6C1.5 14.37 2.11806 15 2.88889 15H12.6111C13.375 15 14 14.37 14 13.6V3.8C14 3.03 13.375 2.4 12.6111 2.4ZM5.66666 7.3H4.27777V8.7H5.66666V7.3ZM8.44446 7.3H7.05557V8.7H8.44446V7.3ZM9.83331 7.3H11.2222V8.7H9.83331V7.3ZM2.88889 13.6H12.6111V5.89999H2.88889V13.6Z\"/></svg>",
  check: "<svg width=\"14\" height=\"12\" viewBox=\"0 0 14 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.44912 9.1786L1.13019 5.75802L0 6.91462L4.44912 11.5L14 1.6566L12.8778 0.5L4.44912 9.1786Z\" /></svg>",
  'interrogation-round': "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.13615 6.47418L8.51174 7.13146C8.22692 7.41628 8.02973 7.67919 7.92019 7.92019C7.76682 8.22692 7.69014 8.62128 7.69014 9.10329H6.30986V8.74178C6.30986 7.97496 6.58372 7.31768 7.13146 6.76995L7.98592 5.88263C8.27074 5.61972 8.41315 5.29108 8.41315 4.89671C8.41315 4.50235 8.27074 4.17371 7.98592 3.9108C7.723 3.62598 7.39437 3.48357 7 3.48357C6.60563 3.48357 6.26604 3.62598 5.98122 3.9108C5.71831 4.17371 5.58685 4.50235 5.58685 4.89671H4.20657C4.20657 4.12989 4.48044 3.47261 5.02817 2.92488C5.5759 2.37715 6.23318 2.10329 7 2.10329C7.76682 2.10329 8.4241 2.37715 8.97183 2.92488C9.51956 3.47261 9.79343 4.12989 9.79343 4.89671C9.79343 5.51017 9.57434 6.03599 9.13615 6.47418ZM7.69014 11.8967H6.30986V10.5164H7.69014V11.8967ZM7 0C6.07981 0 5.18153 0.175274 4.30516 0.525822C3.4507 0.876369 2.69484 1.38028 2.03756 2.03756C1.38028 2.69484 0.876369 3.46166 0.525822 4.33803C0.175274 5.19249 0 6.07981 0 7C0 7.92019 0.175274 8.81847 0.525822 9.69484C0.876369 10.5493 1.38028 11.3052 2.03756 11.9624C2.69484 12.6197 3.4507 13.1236 4.30516 13.4742C5.18153 13.8247 6.07981 14 7 14C7.92019 14 8.80751 13.8247 9.66197 13.4742C10.5383 13.1236 11.3052 12.6197 11.9624 11.9624C12.6197 11.3052 13.1236 10.5493 13.4742 9.69484C13.8247 8.81847 14 7.92019 14 7C14 5.72926 13.6823 4.55712 13.0469 3.48357C12.4335 2.41002 11.59 1.56651 10.5164 0.953052C9.44288 0.317684 8.27074 0 7 0Z\"/></svg>"
};
var _default = icons;
exports["default"] = _default;