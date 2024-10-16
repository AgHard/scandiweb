"use strict";(self.webpackChunkecommerceproject=self.webpackChunkecommerceproject||[]).push([[502],{502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(43),s=a(25),l=a(216),r=a(519),c=a(169),o=a(579);const d=e=>{var t,a,d,n,u,m;let{openCartOverlay:p}=e;const{id:b}=(0,l.g)(),[v,h]=(0,i.useState)(null),[x,y]=(0,i.useState)(null),[j,g]=(0,i.useState)(null),[f,C]=(0,i.useState)(null),[S,N]=(0,i.useState)(null),[k,U]=(0,i.useState)(null),[M,z]=(0,i.useState)(null),[T,_]=(0,i.useState)(0),{activeCategory:B,setActiveCategory:D}=(0,r.N)(),{addToCart:I}=((0,l.Zp)(),(0,c._)());(0,i.useEffect)((()=>{(async()=>{const e=s.J1`
        query($id: String!) {
          products(id: $id) {
            id
            name
            description
            inStock
            galleries {
              imageUrl
            }
            prices {
              amount
              currencyLabel
              currencySymbol
            }
            attributes {
              name
              type
              items {
                id
                display_value
                value
              }
            }
          }
        }
      `;try{const a=(await(0,s.Em)("https://scandiwebtask-c44363ca7aa2.herokuapp.com/backend/graphql.php",e,{id:b})).products.find((e=>e.id===b));var t;if(a)h(a),y(null===a||void 0===a||null===(t=a.galleries[0])||void 0===t?void 0:t.imageUrl);else console.error("Product not found")}catch(a){console.error("Error fetching product details:",a)}})()}),[b]);if(!v)return(0,o.jsx)("div",{children:"Loading..."});const w=!v.inStock||!j&&v.attributes.some((e=>"Capacity"===e.name))||!f&&v.attributes.some((e=>"With USB 3 ports"===e.name))||!S&&v.attributes.some((e=>"Touch ID in keyboard"===e.name))||!k&&v.attributes.some((e=>"Size"===e.name))||!M&&v.attributes.some((e=>"Color"===e.name));return(0,o.jsxs)("div",{className:"product-details-container",children:[(0,o.jsx)("div",{className:"product-gallery-section","data-testid":"product-gallery",children:(0,o.jsx)("div",{className:"image-thumbnails",children:v.galleries.map(((e,t)=>(0,o.jsx)("img",{src:e.imageUrl,alt:`Thumbnail ${t}`,onClick:()=>((e,t)=>{y(e),_(t)})(e.imageUrl,t),className:"thumbnail "+(x===e.imageUrl?"selected":"")},t)))})}),(0,o.jsx)("div",{className:"product-slider-section",children:(0,o.jsxs)("div",{className:"main-image-box",children:[(0,o.jsx)("button",{className:"prev-button",onClick:()=>{const e=(T-1+v.galleries.length)%v.galleries.length;_(e),y(v.galleries[e].imageUrl)},children:"\u2039"}),(0,o.jsx)("img",{src:x,alt:"Main Product"}),(0,o.jsx)("button",{className:"next-button",onClick:()=>{const e=(T+1)%v.galleries.length;_(e),y(v.galleries[e].imageUrl)},children:"\u203a"})]})}),(0,o.jsxs)("div",{className:"product-info",children:[(0,o.jsx)("h2",{children:v.name}),(0,o.jsx)("p",{children:`${v.prices[0].currencySymbol}${v.prices[0].amount.toFixed(2)}`}),(null===(t=v.attributes)||void 0===t?void 0:t.length)>0?(0,o.jsxs)(o.Fragment,{children:[v.attributes.some((e=>"Capacity"===e.name))&&(0,o.jsxs)("div",{className:"product-attribute","data-testid":"product-attribute-capacity",children:[(0,o.jsx)("label",{children:"Capacity:"}),(0,o.jsx)("div",{className:"capacity-options",children:null===(a=v.attributes)||void 0===a?void 0:a.filter((e=>"Capacity"===e.name)).flatMap((e=>e.items)).map((e=>(0,o.jsx)("button",{className:j===e.value?"selected":"",onClick:()=>{return t=e.value,void g(t);var t},children:e.display_value},e.id)))})]}),v.attributes.some((e=>"With USB 3 ports"===e.name))&&(0,o.jsxs)("div",{className:"product-attribute","data-testid":"product-attribute-with-usb-3-ports",children:[(0,o.jsx)("label",{children:"With USB 3 Ports:"}),(0,o.jsx)("div",{className:"usb-ports-options",children:null===(d=v.attributes)||void 0===d?void 0:d.filter((e=>"With USB 3 ports"===e.name)).flatMap((e=>e.items)).map((e=>(0,o.jsx)("button",{className:f===e.value?"selected":"",onClick:()=>{return t=e.value,void C(t);var t},children:e.display_value},e.id)))})]}),v.attributes.some((e=>"Touch ID in keyboard"===e.name))&&(0,o.jsxs)("div",{className:"product-attribute","data-testid":"product-attribute-touch-id-in-keyboard",children:[(0,o.jsx)("label",{children:"Touch ID in keyboard:"}),(0,o.jsx)("div",{className:"touch-id-options",children:null===(n=v.attributes)||void 0===n?void 0:n.filter((e=>"Touch ID in keyboard"===e.name)).flatMap((e=>e.items)).map((e=>(0,o.jsx)("button",{className:S===e.value?"selected":"",onClick:()=>{return t=e.value,void N(t);var t},children:e.display_value},e.id)))})]}),v.attributes.some((e=>"Size"===e.name))&&(0,o.jsxs)("div",{className:"product-attribute","data-testid":"product-attribute-size",children:[(0,o.jsx)("label",{children:"Size:"}),(0,o.jsx)("div",{className:"size-options",children:null===(u=v.attributes)||void 0===u?void 0:u.filter((e=>"Size"===e.name)).flatMap((e=>e.items)).map((e=>(0,o.jsx)("button",{className:k===e.value?"selected":"",onClick:()=>{return t=e.value,void U(t);var t},children:e.value},e.id)))})]}),v.attributes.some((e=>"Color"===e.name))&&(0,o.jsxs)("div",{className:"product-attribute","data-testid":"product-attribute-color",children:[(0,o.jsx)("label",{children:"Color:"}),(0,o.jsx)("div",{className:"color-option",children:null===(m=v.attributes)||void 0===m?void 0:m.filter((e=>"Color"===e.name)).flatMap((e=>e.items)).map((e=>(0,o.jsx)("button",{className:"color-switch "+(M===e.value?"selected":""),style:{backgroundColor:e.value},onClick:()=>{return t=e.value,void z(t);var t}},e.id)))})]})]}):(0,o.jsx)("p",{}),(0,o.jsx)("button",{className:"add-to-cart-button "+(w?"disabled":""),"data-testid":"add-to-cart",disabled:w,onClick:()=>{const e={id:v.id,name:v.name,price:v.prices[0].amount,currencySymbol:v.prices[0].currencySymbol,selectedSize:k,selectedColor:M,selectedCapacity:j,selectedUSBPorts:f,selectedTouchID:S,imageUrl:v.galleries[0].imageUrl,availableSizes:v.attributes.filter((e=>"Size"===e.name)).flatMap((e=>e.items.map((e=>e.value)))),availableColors:v.attributes.filter((e=>"Color"===e.name)).flatMap((e=>e.items.map((e=>e.value)))),availableCapacities:v.attributes.filter((e=>"Capacity"===e.name)).flatMap((e=>e.items.map((e=>e.display_value)))),availableUSBPorts:v.attributes.filter((e=>"With USB 3 ports"===e.name)).flatMap((e=>e.items.map((e=>e.display_value)))),availableTouchIDOptions:v.attributes.filter((e=>"Touch ID in keyboard"===e.name)).flatMap((e=>e.items.map((e=>e.display_value))))};I(e),p()},children:"Add to Cart"}),(0,o.jsx)("div",{className:"product-description","data-testid":"product-description",children:v.description})]})]})}}}]);
//# sourceMappingURL=502.63a08792.chunk.js.map