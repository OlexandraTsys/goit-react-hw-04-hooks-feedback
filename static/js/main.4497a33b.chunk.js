(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),i=a.n(n),l=a(3),r=a(2),d=a.n(r),o=a(0);function b(e){var t=e.good,a=e.neutral,c=e.bad,s=e.total;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:d.a.statistic_title,children:"Statistic"}),Object(o.jsxs)("table",{className:d.a.statistic,children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Good"}),Object(o.jsx)("td",{children:t})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Neutral"}),Object(o.jsx)("td",{children:a})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Bad"}),Object(o.jsx)("td",{children:c})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Total"}),Object(o.jsx)("td",{children:s})]})]}),Object(o.jsxs)("p",{className:d.a.voiting_percent,children:["Positive feedback: ",function(){var e=100*t/s;return Math.round(e)}()," %"]})]})}function j(e){var t=e.message;return Object(o.jsx)("div",{className:d.a.section,children:Object(o.jsx)("h3",{children:t})})}function u(e){var t=e.key,a=e.value,c=e.label,s=e.onLeaveFeedback;return Object(o.jsx)("button",{className:d.a.button,value:a,onClick:s,children:c},t)}j.defaultProps={message:"No feedback given"},u.defaultProps={label:"Button"};var v=a(6);function h(e){var t=e.onLeaveFeedback;return Object(o.jsx)("div",{className:StyleSheet.options,children:v.map((function(e){var a=e.id,c=e.label,s=e.value;return Object(o.jsx)(u,{label:c,value:s,onLeaveFeedback:t},a)}))})}function O(e){var t=e.title;return Object(o.jsx)("div",{className:d.a.section,children:Object(o.jsx)("h2",{children:t})})}function x(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(l.a)(n,2),r=i[0],u=i[1],v=Object(c.useState)(0),x=Object(l.a)(v,2),k=x[0],f=x[1],_=function(){return a+r+k||0};return Object(o.jsxs)("div",{className:d.a.feedbackBlock,children:[Object(o.jsx)(O,{title:"Please leave feedback"}),Object(o.jsx)(h,{onLeaveFeedback:function(e){console.log("click: ",e.target.value),"good"===e.target.value&&(s(a+1),console.log("Feedback ~ this.setState ~ good === ",a)),"neutral"===e.target.value&&u(r+1),"bad"===e.target.value&&f(k+1)}}),_()?Object(o.jsx)(b,{good:a,neutral:r,bad:k,total:_()}):Object(o.jsx)(j,{message:"No feedback given"})]})}function k(){return Object(o.jsx)("div",{children:Object(o.jsx)(x,{})})}h.defaultProps={title:"Please leave feedback"},O.defaultProps={title:"Please leave feedback"};a(12),a(13);i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={feedbackBlock:"Feedback_feedbackBlock__gFhX7",section:"Feedback_section__1nHal",statistic:"Feedback_statistic__26yjH",statistic_title:"Feedback_statistic_title__3FaXr",button:"Feedback_button__aomK2",voiting_percent:"Feedback_voiting_percent__1uaLQ",options:"Feedback_options__3gJMN"}},6:function(e){e.exports=JSON.parse('[{"id":1,"label":"Good","value":"good"},{"id":2,"label":"Neutral","value":"neutral"},{"id":3,"label":"Bad","value":"bad"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.4497a33b.chunk.js.map