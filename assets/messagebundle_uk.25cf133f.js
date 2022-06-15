const E="\u0412\u043C\u0456\u0441\u0442 \u043A\u0430\u0440\u0442\u043A\u0438",_="\u041A\u0430\u0440\u0442\u043A\u0430",T="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043A\u0438",A="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0456\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438",I="\u0410\u0432\u0430\u0442\u0430\u0440",R="{0} \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E, {1} \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E.",O="\u0410\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043B\u044F \u0432\u0441\u044C\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0443.",L="\u041E\u043A\u0440\u0435\u043C\u0456 \u0430\u0432\u0430\u0442\u0430\u0440\u0438.",N="\u041E\u0431\u2019\u0454\u0434\u043D\u0430\u043D\u0456 \u0430\u0432\u0430\u0442\u0430\u0440\u0438.",C="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0421\u0422\u0420\u0406\u041B\u041A\u0410\u041C\u0418.",S="\u0411\u0435\u0439\u0434\u0436",P="{0} \u0437 {1}",D="\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0442\u0435\u0436\u043A\u0430",B="\u0411\u0456\u043B\u044C\u0448\u0435",U="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",t="\u0417\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435",n="\u041F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F",o="\u041D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F",c="\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E",s="\u0437",M="\u041F\u043E\u0437\u0438\u0446\u0456\u044F {0} \u0437 {1} \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430",G="\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",K="\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",H="\u041F\u0430\u043B\u0456\u0442\u0440\u0430 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 - \u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438",V="\u041F\u0430\u043B\u0456\u0442\u0440\u0430 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432",X="\u041A\u043E\u043B\u0456\u0440",W="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",Y="OK",F="\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440",Z="\u0411\u0456\u043B\u044C\u0448\u0435 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432...",e="Alpha control",l="Hue control",a="Hexadecimal",r="Red",u="Green",d="Blue",p="Alpha",h="\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A",m="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0430\u0442\u0438",x="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0430\u0442\u0438/\u0447\u0430\u0441\u0443",J="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0434\u0430\u0442",b="\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",f="\u041E\u0433\u043B\u044F\u0434...",g="\u0412\u0438\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B",i="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u0438",k="\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043F\u043E\u043B\u0435 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u043E\u043C",v="\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043E\u043F\u0446\u0456\u0457",j="\u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456",q="\u0412\u0438\u0431\u0440\u0430\u0442\u0438",w="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 1 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",y="{0} \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",z="\u041D\u0435\u043C\u0430\u0454 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432",Q="\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0439",$="\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E",EE="\u041F\u043E\u0437\u0438\u0446\u0456\u044F \u0441\u043F\u0438\u0441\u043A\u0443 {0} \u0437 {1}",_E="\u0412\u0438\u0431\u0440\u0430\u043D\u0435",TE="\u041D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E",AE="\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0431\u043E\u0440\u0443",IE="\u0412\u0438\u0431\u0456\u0440 \u043F\u043E\u0437\u0438\u0446\u0456\u0457.",RE="\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0432\u0438\u0431\u043E\u0440\u0443",OE="\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0431\u043E\u0440\u0443",LE="\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F",NE="\u0417\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",CE="\u0417 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F",SE="\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",PE="\u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",DE="\u0423\u0441\u043F\u0456\u0445 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456",BE="\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C",UE="OK",tE="\u0426\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0436\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E.",nE="\u0411\u0430\u0433\u0430\u0442\u043E\u0437\u043D\u0430\u0447\u043D\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F",oE="{0} \u0411\u0456\u043B\u044C\u0448\u0435",cE="\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438/\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438",sE="\u0414\u0456\u0430\u043F\u0430\u0437\u043E\u043D",ME="\u041B\u0456\u0432\u0438\u0439 \u043F\u043E\u0432\u0437\u0443\u043D\u043E\u043A",GE="\u041F\u0440\u0430\u0432\u0438\u0439 \u043F\u043E\u0432\u0437\u0443\u043D\u043E\u043A",KE="\u0420\u0435\u0439\u0442\u0438\u043D\u0433",HE="\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443",VE="\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438",XE="\u0413\u0440\u0443\u043F\u0430 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043D\u043E\u043F\u043E\u043A",WE="\u041D\u0430\u0441\u0442\u0438\u0441\u043D\u0443\u0442\u0438 \u041F\u0420\u041E\u0411\u0406\u041B \u0430\u0431\u043E ENTER \u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443 \u043F\u043E\u0437\u0438\u0446\u0456\u0457",YE="\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0430",FE="\u041C\u0430\u0440\u043A\u0435\u0440 \u043F\u043E\u0432\u0437\u0443\u043D\u043A\u0430",ZE="\u0411\u0456\u043B\u044C\u0448\u0435",eE="\u0420\u044F\u0434\u043E\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430",lE="{0} \u0437 {1}",aE="\u0420\u044F\u0434\u043E\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u043F\u0438",rE="\u0412\u0438\u0431\u0456\u0440 \u043F\u043E\u0437\u0438\u0446\u0456\u0457",uE="\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044F\u0434\u043A\u0438",dE="\u0414\u0430\u043B\u0456",pE="\u041D\u0430\u0437\u0430\u0434",hE="\u041C\u0435\u043D\u044E \u043F\u0435\u0440\u0435\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F",mE="\u0411\u0456\u043B\u044C\u0448\u0435",xE="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",JE="{0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C",bE="{0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430 \u043C\u0435\u0436\u0435\u044E",fE="\u0413\u043E\u0434\u0438\u043D\u0438",gE="\u0425\u0432\u0438\u043B\u0438\u043D\u0438",iE="\u0421\u0435\u043A\u0443\u043D\u0434\u0438",kE="AM/PM",vE="OK",jE="\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",qE="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0443",wE="\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u043B\u043E\u0441\u0442\u0456",yE="\u0414\u0430\u0442\u0430",zE="\u0427\u0430\u0441",QE="\u041C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E",$E="\u041C\u0456\u0442\u043E\u043A \u043D\u0435\u043C\u0430\u0454",E_="\u041C\u0456\u0441\u0442\u0438\u0442\u044C 1 \u043C\u0456\u0442\u043A\u0443",__="\u041C\u0456\u0441\u0442\u0438\u0442\u044C {0} \u043C\u0456\u0442\u043E\u043A",T_="\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0456\u0442\u043E\u043A",A_="\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",I_="\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0440\u0435\u0432\u0430",R_="\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0432\u0443\u0437\u043E\u043B",O_="\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0432\u0443\u0437\u043E\u043B",L_="\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u0437\u0430\u043F\u0438\u0441",N_="\u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0434\u0430\u043D\u043E",C_="\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0437\u0430\u043F\u0438\u0441",S_="\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E",P_="\u0414\u0430\u043B\u0456",D_="\u041D\u0430\u0437\u0430\u0434",B_="\u041D\u043E\u043C\u0435\u0440 \u0442\u0438\u0436\u043D\u044F",U_="\u041D\u0435\u0440\u043E\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C",t_="\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",n_="\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438",o_="\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438",c_="\u041A\u043D\u043E\u043F\u043A\u0430 \u0440\u043E\u0437\u0434\u0456\u043B\u0435\u043D\u043D\u044F",s_="\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0443 \u043F\u0440\u043E\u0431\u0456\u043B\u0443 \u0430\u0431\u043E Enter \u0434\u043B\u044F \u0456\u043D\u0456\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0443\u0441\u0442\u0430\u043B\u0435\u043D\u043E\u0457 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457, \u0442\u0430 Alt + \u0441\u0442\u0440\u0456\u043B\u043A\u0430 \u0432\u043D\u0438\u0437 \u0430\u0431\u043E F4 \u0434\u043B\u044F \u0456\u043D\u0456\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0441\u0442\u0440\u0456\u043B\u043A\u0438",M_="\u041D\u0430\u0437\u0430\u0434",G_="\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438";var K_={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:C,BADGE_DESCRIPTION:S,BREADCRUMB_ITEM_POS:P,BREADCRUMBS_ARIA_LABEL:D,BREADCRUMBS_OVERFLOW_ARIA_LABEL:B,BREADCRUMBS_CANCEL_BUTTON:U,BUSY_INDICATOR_TITLE:t,BUTTON_ARIA_TYPE_ACCEPT:n,BUTTON_ARIA_TYPE_REJECT:o,BUTTON_ARIA_TYPE_EMPHASIZED:c,CAROUSEL_OF_TEXT:s,CAROUSEL_DOT_TEXT:M,CAROUSEL_PREVIOUS_ARROW_TEXT:G,CAROUSEL_NEXT_ARROW_TEXT:K,COLORPALETTE_CONTAINER_LABEL:H,COLORPALETTE_POPOVER_TITLE:V,COLORPALETTE_COLOR_LABEL:X,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:W,COLOR_PALETTE_DIALOG_OK_BUTTON:Y,COLOR_PALETTE_DIALOG_TITLE:F,COLOR_PALETTE_MORE_COLORS_TEXT:Z,COLORPICKER_ALPHA_SLIDER:e,COLORPICKER_HUE_SLIDER:l,COLORPICKER_HEX:a,COLORPICKER_RED:r,COLORPICKER_GREEN:u,COLORPICKER_BLUE:d,COLORPICKER_ALPHA:p,DATEPICKER_OPEN_ICON_TITLE:h,DATEPICKER_DATE_DESCRIPTION:m,DATETIME_DESCRIPTION:x,DATERANGE_DESCRIPTION:J,DELETE:b,FILEUPLOAD_BROWSE:f,FILEUPLOADER_TITLE:g,GROUP_HEADER_TEXT:i,SELECT_ROLE_DESCRIPTION:k,SELECT_OPTIONS:v,INPUT_SUGGESTIONS:j,INPUT_SUGGESTIONS_TITLE:q,INPUT_SUGGESTIONS_ONE_HIT:w,INPUT_SUGGESTIONS_MORE_HITS:y,INPUT_SUGGESTIONS_NO_HIT:z,LINK_SUBTLE:Q,LINK_EMPHASIZED:$,LIST_ITEM_POSITION:EE,LIST_ITEM_SELECTED:_E,LIST_ITEM_NOT_SELECTED:TE,ARIA_LABEL_LIST_ITEM_CHECKBOX:AE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:IE,ARIA_LABEL_LIST_SELECTABLE:RE,ARIA_LABEL_LIST_MULTISELECTABLE:OE,ARIA_LABEL_LIST_DELETABLE:LE,MESSAGE_STRIP_CLOSE_BUTTON:NE,MESSAGE_STRIP_CLOSABLE:CE,MESSAGE_STRIP_ERROR:SE,MESSAGE_STRIP_WARNING:PE,MESSAGE_STRIP_SUCCESS:DE,MESSAGE_STRIP_INFORMATION:BE,MULTICOMBOBOX_DIALOG_OK_BUTTON:UE,VALUE_STATE_ERROR_ALREADY_SELECTED:tE,MULTIINPUT_ROLEDESCRIPTION_TEXT:nE,MULTIINPUT_SHOW_MORE_TOKENS:oE,PANEL_ICON:cE,RANGE_SLIDER_ARIA_DESCRIPTION:sE,RANGE_SLIDER_START_HANDLE_DESCRIPTION:ME,RANGE_SLIDER_END_HANDLE_DESCRIPTION:GE,RATING_INDICATOR_TOOLTIP_TEXT:KE,RATING_INDICATOR_TEXT:HE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:VE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:XE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:WE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:YE,SLIDER_ARIA_DESCRIPTION:FE,LOAD_MORE_TEXT:ZE,TABLE_HEADER_ROW_TEXT:eE,TABLE_ROW_POSITION:lE,TABLE_GROUP_ROW_ARIA_LABEL:aE,ARIA_LABEL_ROW_SELECTION:rE,ARIA_LABEL_SELECT_ALL_CHECKBOX:uE,TABCONTAINER_NEXT_ICON_ACC_NAME:dE,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:pE,TABCONTAINER_OVERFLOW_MENU_TITLE:hE,TABCONTAINER_END_OVERFLOW:mE,TABCONTAINER_POPOVER_CANCEL_BUTTON:xE,TEXTAREA_CHARACTERS_LEFT:JE,TEXTAREA_CHARACTERS_EXCEEDED:bE,TIMEPICKER_HOURS_LABEL:fE,TIMEPICKER_MINUTES_LABEL:gE,TIMEPICKER_SECONDS_LABEL:iE,TIMEPICKER_PERIODS_LABEL:kE,TIMEPICKER_SUBMIT_BUTTON:vE,TIMEPICKER_CANCEL_BUTTON:jE,TIMEPICKER_INPUT_DESCRIPTION:qE,DURATION_INPUT_DESCRIPTION:wE,DATETIME_PICKER_DATE_BUTTON:yE,DATETIME_PICKER_TIME_BUTTON:zE,TOKEN_ARIA_DELETABLE:QE,TOKENIZER_ARIA_CONTAIN_TOKEN:$E,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:E_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:__,TOKENIZER_ARIA_LABEL:T_,TOKENIZER_POPOVER_REMOVE:A_,TREE_ITEM_ARIA_LABEL:I_,TREE_ITEM_EXPAND_NODE:R_,TREE_ITEM_COLLAPSE_NODE:O_,VALUE_STATE_ERROR:L_,VALUE_STATE_WARNING:N_,VALUE_STATE_INFORMATION:C_,VALUE_STATE_SUCCESS:S_,CALENDAR_HEADER_NEXT_BUTTON:P_,CALENDAR_HEADER_PREVIOUS_BUTTON:D_,DAY_PICKER_WEEK_NUMBER_TEXT:B_,DAY_PICKER_NON_WORKING_DAY:U_,DAY_PICKER_TODAY:t_,STEPINPUT_DEC_ICON_TITLE:n_,STEPINPUT_INC_ICON_TITLE:o_,SPLIT_BUTTON_DESCRIPTION:c_,SPLIT_BUTTON_KEYBOARD_HINT:s_,MENU_BACK_BUTTON_ARIA_LABEL:M_,MENU_CLOSE_BUTTON_ARIA_LABEL:G_};export{E as ARIA_LABEL_CARD_CONTENT,LE as ARIA_LABEL_LIST_DELETABLE,AE as ARIA_LABEL_LIST_ITEM_CHECKBOX,IE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,OE as ARIA_LABEL_LIST_MULTISELECTABLE,RE as ARIA_LABEL_LIST_SELECTABLE,rE as ARIA_LABEL_ROW_SELECTION,uE as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,C as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,S as BADGE_DESCRIPTION,D as BREADCRUMBS_ARIA_LABEL,U as BREADCRUMBS_CANCEL_BUTTON,B as BREADCRUMBS_OVERFLOW_ARIA_LABEL,P as BREADCRUMB_ITEM_POS,t as BUSY_INDICATOR_TITLE,n as BUTTON_ARIA_TYPE_ACCEPT,c as BUTTON_ARIA_TYPE_EMPHASIZED,o as BUTTON_ARIA_TYPE_REJECT,P_ as CALENDAR_HEADER_NEXT_BUTTON,D_ as CALENDAR_HEADER_PREVIOUS_BUTTON,M as CAROUSEL_DOT_TEXT,K as CAROUSEL_NEXT_ARROW_TEXT,s as CAROUSEL_OF_TEXT,G as CAROUSEL_PREVIOUS_ARROW_TEXT,X as COLORPALETTE_COLOR_LABEL,H as COLORPALETTE_CONTAINER_LABEL,V as COLORPALETTE_POPOVER_TITLE,p as COLORPICKER_ALPHA,e as COLORPICKER_ALPHA_SLIDER,d as COLORPICKER_BLUE,u as COLORPICKER_GREEN,a as COLORPICKER_HEX,l as COLORPICKER_HUE_SLIDER,r as COLORPICKER_RED,W as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,Y as COLOR_PALETTE_DIALOG_OK_BUTTON,F as COLOR_PALETTE_DIALOG_TITLE,Z as COLOR_PALETTE_MORE_COLORS_TEXT,m as DATEPICKER_DATE_DESCRIPTION,h as DATEPICKER_OPEN_ICON_TITLE,J as DATERANGE_DESCRIPTION,x as DATETIME_DESCRIPTION,yE as DATETIME_PICKER_DATE_BUTTON,zE as DATETIME_PICKER_TIME_BUTTON,U_ as DAY_PICKER_NON_WORKING_DAY,t_ as DAY_PICKER_TODAY,B_ as DAY_PICKER_WEEK_NUMBER_TEXT,b as DELETE,wE as DURATION_INPUT_DESCRIPTION,g as FILEUPLOADER_TITLE,f as FILEUPLOAD_BROWSE,i as GROUP_HEADER_TEXT,j as INPUT_SUGGESTIONS,y as INPUT_SUGGESTIONS_MORE_HITS,z as INPUT_SUGGESTIONS_NO_HIT,w as INPUT_SUGGESTIONS_ONE_HIT,q as INPUT_SUGGESTIONS_TITLE,$ as LINK_EMPHASIZED,Q as LINK_SUBTLE,TE as LIST_ITEM_NOT_SELECTED,EE as LIST_ITEM_POSITION,_E as LIST_ITEM_SELECTED,ZE as LOAD_MORE_TEXT,M_ as MENU_BACK_BUTTON_ARIA_LABEL,G_ as MENU_CLOSE_BUTTON_ARIA_LABEL,CE as MESSAGE_STRIP_CLOSABLE,NE as MESSAGE_STRIP_CLOSE_BUTTON,SE as MESSAGE_STRIP_ERROR,BE as MESSAGE_STRIP_INFORMATION,DE as MESSAGE_STRIP_SUCCESS,PE as MESSAGE_STRIP_WARNING,UE as MULTICOMBOBOX_DIALOG_OK_BUTTON,nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,oE as MULTIINPUT_SHOW_MORE_TOKENS,cE as PANEL_ICON,sE as RANGE_SLIDER_ARIA_DESCRIPTION,GE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,ME as RANGE_SLIDER_START_HANDLE_DESCRIPTION,HE as RATING_INDICATOR_TEXT,KE as RATING_INDICATOR_TOOLTIP_TEXT,VE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,YE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,XE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,v as SELECT_OPTIONS,k as SELECT_ROLE_DESCRIPTION,FE as SLIDER_ARIA_DESCRIPTION,c_ as SPLIT_BUTTON_DESCRIPTION,s_ as SPLIT_BUTTON_KEYBOARD_HINT,n_ as STEPINPUT_DEC_ICON_TITLE,o_ as STEPINPUT_INC_ICON_TITLE,mE as TABCONTAINER_END_OVERFLOW,dE as TABCONTAINER_NEXT_ICON_ACC_NAME,hE as TABCONTAINER_OVERFLOW_MENU_TITLE,xE as TABCONTAINER_POPOVER_CANCEL_BUTTON,pE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,aE as TABLE_GROUP_ROW_ARIA_LABEL,eE as TABLE_HEADER_ROW_TEXT,lE as TABLE_ROW_POSITION,bE as TEXTAREA_CHARACTERS_EXCEEDED,JE as TEXTAREA_CHARACTERS_LEFT,jE as TIMEPICKER_CANCEL_BUTTON,fE as TIMEPICKER_HOURS_LABEL,qE as TIMEPICKER_INPUT_DESCRIPTION,gE as TIMEPICKER_MINUTES_LABEL,kE as TIMEPICKER_PERIODS_LABEL,iE as TIMEPICKER_SECONDS_LABEL,vE as TIMEPICKER_SUBMIT_BUTTON,E_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,__ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,$E as TOKENIZER_ARIA_CONTAIN_TOKEN,T_ as TOKENIZER_ARIA_LABEL,A_ as TOKENIZER_POPOVER_REMOVE,QE as TOKEN_ARIA_DELETABLE,I_ as TREE_ITEM_ARIA_LABEL,O_ as TREE_ITEM_COLLAPSE_NODE,R_ as TREE_ITEM_EXPAND_NODE,L_ as VALUE_STATE_ERROR,tE as VALUE_STATE_ERROR_ALREADY_SELECTED,C_ as VALUE_STATE_INFORMATION,S_ as VALUE_STATE_SUCCESS,N_ as VALUE_STATE_WARNING,K_ as default};