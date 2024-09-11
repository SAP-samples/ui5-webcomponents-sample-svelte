const E="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043A\u0430\u0440\u0442\u044B",_="\u041A\u0430\u0440\u0442\u0430",T="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u044B",A="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B",I="\u0410\u0432\u0430\u0442\u0430\u0440",R="{0} \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F, {1} \u0441\u043A\u0440\u044B\u0442\u043E.",O="\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.",L="\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u044B.",N="\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u044B.",C="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438.",S="\u0422\u0435\u0433",P='\u041A\u043D\u043E\u043F\u043A\u0430 "\u0422\u0435\u0433"',D="\u041E\u0448\u0438\u0431\u043A\u0430",B="\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",U="\u0423\u0441\u043F\u0435\u0448\u043D\u043E",t="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",n="{0} \u0438\u0437 {1}",s="\u041F\u0443\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",o="\u0411\u043E\u043B\u044C\u0448\u0435",c="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",M="\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435",G="\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F",K="\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F",V="\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F",H="\u0421\u0435\u0433\u043E\u0434\u043D\u044F",X="\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0434\u0435\u043D\u044C",Y="\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C",W="\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C",F="\u0438\u0437",Z="\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F {0} \u0438\u0437 {1}",Q="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",e="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",r="\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u2013 \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430",a="\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430",f="\u0426\u0432\u0435\u0442",l="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",u="\u041E\u041A",d="\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442",h="\u0411\u043E\u043B\u044C\u0448\u0435 \u0446\u0432\u0435\u0442\u043E\u0432...",i="\u0426\u0432\u0435\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",J="\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0430\u043B\u044C\u0444\u0430",b="\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043E\u0442\u0442\u0435\u043D\u043A\u0430",g="\u0428\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u043E\u0435",m="\u041A\u0440\u0430\u0441\u043D\u044B\u0439",p="\u0417\u0435\u043B\u0435\u043D\u044B\u0439",v="\u0421\u0438\u043D\u0438\u0439",x="\u0410\u043B\u044C\u0444\u0430",j="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0432\u044B\u0431\u043E\u0440\u0430",k="\u0412\u0432\u043E\u0434 \u0434\u0430\u0442\u044B",q="\u0412\u0432\u043E\u0434 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",w="\u0412\u0432\u043E\u0434 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0434\u0430\u0442",y="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443",z="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F",$="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0434\u0430\u0442",EE="\u0423\u0434\u0430\u043B\u0438\u0442\u044C",_E="\u2013",TE="\u041F\u0443\u0441\u0442\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",AE="\u041E\u0431\u0437\u043E\u0440...",IE="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B",RE="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B",OE="\u041F\u043E\u043B\u0435 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C",LE="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u043F\u0446\u0438\u0438",NE="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",CE="\u0415\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",SE="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 ({0} \u0438\u0437 {1})",PE="\u0412\u044B\u0431\u0440\u0430\u0442\u044C",DE="\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D 1 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",BE="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432: {0}",UE="\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432",tE="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",nE="\u041D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u0430\u044F",sE="\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F",oE="\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 {0} \u0438\u0437 {1}",cE="\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435",ME="\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",GE="\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B",KE="\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430",VE="\u0412\u044B\u0431\u043E\u0440 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",HE="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0432\u044B\u0431\u043E\u0440\u0430",XE="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430",YE="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F",WE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u0417\u0430\u043A\u0440\u044B\u0442\u044C",FE="\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C",ZE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u041E\u0448\u0438\u0431\u043A\u0430",QE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",eE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u0423\u0441\u043F\u0435\u0448\u043D\u043E",rE="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430",aE="\u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430",fE="\u041E\u041A",lE="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438",uE="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",dE="\u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E.",hE="\u0412\u0432\u043E\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439",iE="\u0415\u0449\u0435 {0}",JE="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043A\u0443 \u043F\u043E \u0432\u0432\u043E\u0434\u0443",bE="\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C/\u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C",gE="\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D",mE="\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043B\u0435\u0432\u0430",pE="\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430",vE="\u041E\u0446\u0435\u043D\u043A\u0430",xE="\u0417\u0432\u0435\u0437\u0434\u044B \u043E\u0446\u0435\u043D\u043A\u0438",jE="\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E",kE="\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C",qE="\u0413\u0440\u0443\u043F\u043F\u0430 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A",wE="\u0414\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 Enter",yE="\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430",zE="\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A",$E="\u0411\u043E\u043B\u044C\u0448\u0435",E_="\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 1 \u0438\u0437 {0}",__="{0} \u0438\u0437 {1}",T_="\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u043F\u043F\u044B",A_="\u0412\u044B\u0431\u043E\u0440 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",I_="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",R_="\u041F\u0443\u0441\u0442\u043E",O_="\u041F\u043E\u043B\u043E\u0436\u0438\u0442.",L_="\u041E\u0442\u0440\u0438\u0446\u0430\u0442.",N_="\u041A\u0440\u0438\u0442\u0438\u0447.",C_="\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D.",S_="\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0441 \u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C\u0438",P_="\u0414\u0430\u043B\u044C\u0448\u0435",D_="\u041D\u0430\u0437\u0430\u0434",B_="\u041C\u0435\u043D\u044E \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",U_="\u0411\u043E\u043B\u044C\u0448\u0435",t_="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",n_="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439 \u0432\u043D\u0438\u0437, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0437\u0438\u0446\u0438\u0439",s_="\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432: {0}",o_="\u0421\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0441\u0432\u044B\u0448\u0435 \u043B\u0438\u043C\u0438\u0442\u0430: {0}",c_="\u0427\u0430\u0441\u044B",M_="\u041C\u0438\u043D\u0443\u0442\u044B",G_="\u0421\u0435\u043A\u0443\u043D\u0434\u044B",K_="\u041E\u041A",V_="\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",H_="\u0412\u0432\u043E\u0434 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",X_="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F",Y_="\u0426\u0438\u0444\u0435\u0440\u0431\u043B\u0430\u0442",W_="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0430\u0441\u044B",F_="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0438\u043D\u0443\u0442\u044B",Z_="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B",Q_="\u0412\u0432\u043E\u0434 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",e_="\u0414\u0430\u0442\u0430",r_="\u0412\u0440\u0435\u043C\u044F",a_="\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435",f_="\u041C\u0430\u0440\u043A\u0435\u0440",l_="\u041D\u0435\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432",u_="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 1 \u043C\u0430\u0440\u043A\u0435\u0440",d_="\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u044B: {0}",h_="\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432",i_="\u0412\u0441\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438",J_="{0} \u043F\u043E\u0437.",b_="\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0440\u0435\u0432\u0430",g_="\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B",m_="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B",p_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u041E\u0448\u0438\u0431\u043A\u0430"',v_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"',x_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u0423\u0441\u043F\u0435\u0448\u043D\u043E"',j_='\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"',k_="\u041D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0432\u043E\u0434",q_="\u0412\u044B\u0434\u0430\u043D\u043E \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",w_="\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C",y_="\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u0430\u043B\u0438\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0430",z_="\u0414\u0430\u043B\u044C\u0448\u0435",$_="\u041D\u0430\u0437\u0430\u0434",ET="\u041D\u043E\u043C\u0435\u0440 \u043D\u0435\u0434\u0435\u043B\u0438",_T="\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C",TT="\u0421\u0435\u0433\u043E\u0434\u043D\u044F",AT="\u0412\u044B\u0431\u043E\u0440 \u043C\u0435\u0441\u044F\u0446\u0430",IT="\u0412\u044B\u0431\u043E\u0440 \u0433\u043E\u0434\u0430",RT="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",OT="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",LT="\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438 \u043A\u043D\u043E\u043F\u043A\u0430",NT="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 Enter, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0438 Alt + \u043A\u043B\u0430\u0432\u0438\u0448\u0443 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439 \u0432\u043D\u0438\u0437 \u0438\u043B\u0438 F4, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0441\u0442\u0440\u0435\u043B\u043A\u0438",CT="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",ST="\u041D\u0430\u0437\u0430\u0434",PT="\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C",DT="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0446\u0438\u044E \u0432 \u043C\u0435\u043D\u044E",BT="\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",UT="\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",tT="\u0414\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 Shift+\u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438",nT="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438",sT="\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438, \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 Shift+\u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438",oT=":",cT="\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438",MT="\u0414\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0444\u043B\u0430\u0436\u043E\u043A \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044F.",GT="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u044D\u0442\u043E \u043F\u043E\u043B\u0435 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0432 \u0441\u043F\u0438\u0441\u043A\u0435.",KT="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0432 \u0441\u043F\u0438\u0441\u043A\u0435.",VT="\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043E\u043F\u0446\u0438\u0439.",HT="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u044D\u0442\u043E \u043F\u043E\u043B\u0435.",XT="\u0412\u044B\u0431\u043E\u0440",YT="\u0412\u044B\u0431\u043E\u0440 \u0441\u0442\u0440\u043E\u043A\u0438",WT="\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",FT="\u041F\u043E\u043F-\u0438\u043D \u0441\u0442\u0440\u043E\u043A\u0438",ZT="\u0411\u043E\u043B\u044C\u0448\u0435",QT="\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Enter \u0438\u043B\u0438 \u043F\u0440\u043E\u0431\u0435\u043B, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435 \u0441\u0442\u0440\u043E\u043A\u0438";var eT={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:C,TAG_DESCRIPTION_TAG:S,TAG_ROLE_DESCRIPTION:P,TAG_ERROR:D,TAG_WARNING:B,TAG_SUCCESS:U,TAG_INFORMATION:t,BREADCRUMB_ITEM_POS:n,BREADCRUMBS_ARIA_LABEL:s,BREADCRUMBS_OVERFLOW_ARIA_LABEL:o,BREADCRUMBS_CANCEL_BUTTON:c,BUSY_INDICATOR_TITLE:M,BUTTON_ARIA_TYPE_ACCEPT:G,BUTTON_ARIA_TYPE_REJECT:K,BUTTON_ARIA_TYPE_EMPHASIZED:V,CAL_LEGEND_TODAY_TEXT:H,CAL_LEGEND_SELECTED_TEXT:X,CAL_LEGEND_WORKING_DAY_TEXT:Y,CAL_LEGEND_NON_WORKING_DAY_TEXT:W,CAROUSEL_OF_TEXT:F,CAROUSEL_DOT_TEXT:Z,CAROUSEL_PREVIOUS_ARROW_TEXT:Q,CAROUSEL_NEXT_ARROW_TEXT:e,COLORPALETTE_CONTAINER_LABEL:r,COLORPALETTE_POPOVER_TITLE:a,COLORPALETTE_COLOR_LABEL:f,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:l,COLOR_PALETTE_DIALOG_OK_BUTTON:u,COLOR_PALETTE_DIALOG_TITLE:d,COLOR_PALETTE_MORE_COLORS_TEXT:h,COLOR_PALETTE_DEFAULT_COLOR_TEXT:i,COLORPICKER_ALPHA_SLIDER:J,COLORPICKER_HUE_SLIDER:b,COLORPICKER_HEX:g,COLORPICKER_RED:m,COLORPICKER_GREEN:p,COLORPICKER_BLUE:v,COLORPICKER_ALPHA:x,DATEPICKER_OPEN_ICON_TITLE:j,DATEPICKER_DATE_DESCRIPTION:k,DATETIME_DESCRIPTION:q,DATERANGE_DESCRIPTION:w,DATEPICKER_POPOVER_ACCESSIBLE_NAME:y,DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME:z,DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME:$,DELETE:EE,EMPTY_INDICATOR_SYMBOL:_E,EMPTY_INDICATOR_ACCESSIBLE_TEXT:TE,FILEUPLOAD_BROWSE:AE,FILEUPLOADER_TITLE:IE,GROUP_HEADER_TEXT:RE,SELECT_ROLE_DESCRIPTION:OE,SELECT_OPTIONS:LE,SHOW_SELECTED_BUTTON:NE,INPUT_SUGGESTIONS:CE,MCB_SELECTED_ITEMS:SE,INPUT_SUGGESTIONS_TITLE:PE,INPUT_SUGGESTIONS_ONE_HIT:DE,INPUT_SUGGESTIONS_MORE_HITS:BE,INPUT_SUGGESTIONS_NO_HIT:UE,INPUT_CLEAR_ICON_ACC_NAME:tE,LINK_SUBTLE:nE,LINK_EMPHASIZED:sE,LIST_ITEM_POSITION:oE,LIST_ITEM_SELECTED:cE,LIST_ITEM_NOT_SELECTED:ME,LIST_ITEM_GROUP_HEADER:GE,ARIA_LABEL_LIST_ITEM_CHECKBOX:KE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:VE,ARIA_LABEL_LIST_SELECTABLE:HE,ARIA_LABEL_LIST_MULTISELECTABLE:XE,ARIA_LABEL_LIST_DELETABLE:YE,MESSAGE_STRIP_CLOSE_BUTTON:WE,MESSAGE_STRIP_CLOSABLE:FE,MESSAGE_STRIP_ERROR:ZE,MESSAGE_STRIP_WARNING:QE,MESSAGE_STRIP_SUCCESS:eE,MESSAGE_STRIP_INFORMATION:rE,MESSAGE_STRIP_CUSTOM:aE,MULTICOMBOBOX_DIALOG_OK_BUTTON:fE,COMBOBOX_AVAILABLE_OPTIONS:lE,INPUT_AVALIABLE_VALUES:uE,VALUE_STATE_ERROR_ALREADY_SELECTED:dE,MULTIINPUT_ROLEDESCRIPTION_TEXT:hE,MULTIINPUT_SHOW_MORE_TOKENS:iE,MULTIINPUT_VALUE_HELP_LABEL:JE,PANEL_ICON:bE,RANGE_SLIDER_ARIA_DESCRIPTION:gE,RANGE_SLIDER_START_HANDLE_DESCRIPTION:mE,RANGE_SLIDER_END_HANDLE_DESCRIPTION:pE,RATING_INDICATOR_TOOLTIP_TEXT:vE,RATING_INDICATOR_TEXT:xE,RATING_INDICATOR_ARIA_DESCRIPTION:jE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:kE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:qE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:wE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:yE,SLIDER_ARIA_DESCRIPTION:zE,LOAD_MORE_TEXT:$E,TABLE_HEADER_ROW_INFORMATION:E_,TABLE_ROW_POSITION:__,TABLE_GROUP_ROW_ARIA_LABEL:T_,ARIA_LABEL_ROW_SELECTION:A_,ARIA_LABEL_SELECT_ALL_CHECKBOX:I_,ARIA_LABEL_EMPTY_CELL:R_,TAB_ARIA_DESIGN_POSITIVE:O_,TAB_ARIA_DESIGN_NEGATIVE:L_,TAB_ARIA_DESIGN_CRITICAL:N_,TAB_ARIA_DESIGN_NEUTRAL:C_,TAB_SPLIT_ROLE_DESCRIPTION:S_,TABCONTAINER_NEXT_ICON_ACC_NAME:P_,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:D_,TABCONTAINER_OVERFLOW_MENU_TITLE:B_,TABCONTAINER_END_OVERFLOW:U_,TABCONTAINER_POPOVER_CANCEL_BUTTON:t_,TABCONTAINER_SUBTABS_DESCRIPTION:n_,TEXTAREA_CHARACTERS_LEFT:s_,TEXTAREA_CHARACTERS_EXCEEDED:o_,TIMEPICKER_HOURS_LABEL:c_,TIMEPICKER_MINUTES_LABEL:M_,TIMEPICKER_SECONDS_LABEL:G_,TIMEPICKER_SUBMIT_BUTTON:K_,TIMEPICKER_CANCEL_BUTTON:V_,TIMEPICKER_INPUT_DESCRIPTION:H_,TIMEPICKER_POPOVER_ACCESSIBLE_NAME:X_,TIMEPICKER_CLOCK_DIAL_LABEL:Y_,TIMEPICKER_INPUTS_ENTER_HOURS:W_,TIMEPICKER_INPUTS_ENTER_MINUTES:F_,TIMEPICKER_INPUTS_ENTER_SECONDS:Z_,DURATION_INPUT_DESCRIPTION:Q_,DATETIME_PICKER_DATE_BUTTON:e_,DATETIME_PICKER_TIME_BUTTON:r_,TOKEN_ARIA_DELETABLE:a_,TOKEN_ARIA_LABEL:f_,TOKENIZER_ARIA_CONTAIN_TOKEN:l_,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:u_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:d_,TOKENIZER_ARIA_LABEL:h_,TOKENIZER_POPOVER_REMOVE:i_,TOKENIZER_SHOW_ALL_ITEMS:J_,TREE_ITEM_ARIA_LABEL:b_,TREE_ITEM_EXPAND_NODE:g_,TREE_ITEM_COLLAPSE_NODE:m_,VALUE_STATE_TYPE_ERROR:p_,VALUE_STATE_TYPE_WARNING:v_,VALUE_STATE_TYPE_SUCCESS:x_,VALUE_STATE_TYPE_INFORMATION:j_,VALUE_STATE_ERROR:k_,VALUE_STATE_WARNING:q_,VALUE_STATE_INFORMATION:w_,VALUE_STATE_SUCCESS:y_,CALENDAR_HEADER_NEXT_BUTTON:z_,CALENDAR_HEADER_PREVIOUS_BUTTON:$_,DAY_PICKER_WEEK_NUMBER_TEXT:ET,DAY_PICKER_NON_WORKING_DAY:_T,DAY_PICKER_TODAY:TT,MONTH_PICKER_DESCRIPTION:AT,YEAR_PICKER_DESCRIPTION:IT,STEPINPUT_DEC_ICON_TITLE:RT,STEPINPUT_INC_ICON_TITLE:OT,SPLIT_BUTTON_DESCRIPTION:LT,SPLIT_BUTTON_KEYBOARD_HINT:NT,SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP:CT,MENU_BACK_BUTTON_ARIA_LABEL:ST,MENU_CLOSE_BUTTON_ARIA_LABEL:PT,MENU_POPOVER_ACCESSIBLE_NAME:DT,NAVIGATION_MENU_POPOVER_HIDDEN_TEXT:BT,DIALOG_HEADER_ARIA_ROLE_DESCRIPTION:UT,DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE:tT,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE:nT,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE:sT,LABEL_COLON:oT,TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL:cT,FORM_CHECKABLE_REQUIRED:MT,FORM_MIXED_TEXTFIELD_REQUIRED:GT,FORM_SELECTABLE_REQUIRED:KT,FORM_SELECTABLE_REQUIRED2:VT,FORM_TEXTFIELD_REQUIRED:HT,TABLE_SELECTION:XT,TABLE_ROW_SELECTOR:YT,TABLE_NO_DATA:WT,TABLE_ROW_POPIN:FT,TABLE_MORE:ZT,TABLE_MORE_DESCRIPTION:QT};export{E as ARIA_LABEL_CARD_CONTENT,R_ as ARIA_LABEL_EMPTY_CELL,YE as ARIA_LABEL_LIST_DELETABLE,KE as ARIA_LABEL_LIST_ITEM_CHECKBOX,VE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,XE as ARIA_LABEL_LIST_MULTISELECTABLE,HE as ARIA_LABEL_LIST_SELECTABLE,A_ as ARIA_LABEL_ROW_SELECTION,I_ as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,C as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,s as BREADCRUMBS_ARIA_LABEL,c as BREADCRUMBS_CANCEL_BUTTON,o as BREADCRUMBS_OVERFLOW_ARIA_LABEL,n as BREADCRUMB_ITEM_POS,M as BUSY_INDICATOR_TITLE,G as BUTTON_ARIA_TYPE_ACCEPT,V as BUTTON_ARIA_TYPE_EMPHASIZED,K as BUTTON_ARIA_TYPE_REJECT,z_ as CALENDAR_HEADER_NEXT_BUTTON,$_ as CALENDAR_HEADER_PREVIOUS_BUTTON,W as CAL_LEGEND_NON_WORKING_DAY_TEXT,X as CAL_LEGEND_SELECTED_TEXT,H as CAL_LEGEND_TODAY_TEXT,Y as CAL_LEGEND_WORKING_DAY_TEXT,Z as CAROUSEL_DOT_TEXT,e as CAROUSEL_NEXT_ARROW_TEXT,F as CAROUSEL_OF_TEXT,Q as CAROUSEL_PREVIOUS_ARROW_TEXT,f as COLORPALETTE_COLOR_LABEL,r as COLORPALETTE_CONTAINER_LABEL,a as COLORPALETTE_POPOVER_TITLE,x as COLORPICKER_ALPHA,J as COLORPICKER_ALPHA_SLIDER,v as COLORPICKER_BLUE,p as COLORPICKER_GREEN,g as COLORPICKER_HEX,b as COLORPICKER_HUE_SLIDER,m as COLORPICKER_RED,i as COLOR_PALETTE_DEFAULT_COLOR_TEXT,l as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,u as COLOR_PALETTE_DIALOG_OK_BUTTON,d as COLOR_PALETTE_DIALOG_TITLE,h as COLOR_PALETTE_MORE_COLORS_TEXT,lE as COMBOBOX_AVAILABLE_OPTIONS,k as DATEPICKER_DATE_DESCRIPTION,j as DATEPICKER_OPEN_ICON_TITLE,y as DATEPICKER_POPOVER_ACCESSIBLE_NAME,$ as DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME,w as DATERANGE_DESCRIPTION,z as DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME,q as DATETIME_DESCRIPTION,e_ as DATETIME_PICKER_DATE_BUTTON,r_ as DATETIME_PICKER_TIME_BUTTON,_T as DAY_PICKER_NON_WORKING_DAY,TT as DAY_PICKER_TODAY,ET as DAY_PICKER_WEEK_NUMBER_TEXT,EE as DELETE,nT as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,sT as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,tT as DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,UT as DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,Q_ as DURATION_INPUT_DESCRIPTION,TE as EMPTY_INDICATOR_ACCESSIBLE_TEXT,_E as EMPTY_INDICATOR_SYMBOL,IE as FILEUPLOADER_TITLE,AE as FILEUPLOAD_BROWSE,MT as FORM_CHECKABLE_REQUIRED,GT as FORM_MIXED_TEXTFIELD_REQUIRED,KT as FORM_SELECTABLE_REQUIRED,VT as FORM_SELECTABLE_REQUIRED2,HT as FORM_TEXTFIELD_REQUIRED,RE as GROUP_HEADER_TEXT,uE as INPUT_AVALIABLE_VALUES,tE as INPUT_CLEAR_ICON_ACC_NAME,CE as INPUT_SUGGESTIONS,BE as INPUT_SUGGESTIONS_MORE_HITS,UE as INPUT_SUGGESTIONS_NO_HIT,DE as INPUT_SUGGESTIONS_ONE_HIT,PE as INPUT_SUGGESTIONS_TITLE,oT as LABEL_COLON,sE as LINK_EMPHASIZED,nE as LINK_SUBTLE,GE as LIST_ITEM_GROUP_HEADER,ME as LIST_ITEM_NOT_SELECTED,oE as LIST_ITEM_POSITION,cE as LIST_ITEM_SELECTED,$E as LOAD_MORE_TEXT,SE as MCB_SELECTED_ITEMS,ST as MENU_BACK_BUTTON_ARIA_LABEL,PT as MENU_CLOSE_BUTTON_ARIA_LABEL,DT as MENU_POPOVER_ACCESSIBLE_NAME,FE as MESSAGE_STRIP_CLOSABLE,WE as MESSAGE_STRIP_CLOSE_BUTTON,aE as MESSAGE_STRIP_CUSTOM,ZE as MESSAGE_STRIP_ERROR,rE as MESSAGE_STRIP_INFORMATION,eE as MESSAGE_STRIP_SUCCESS,QE as MESSAGE_STRIP_WARNING,AT as MONTH_PICKER_DESCRIPTION,fE as MULTICOMBOBOX_DIALOG_OK_BUTTON,hE as MULTIINPUT_ROLEDESCRIPTION_TEXT,iE as MULTIINPUT_SHOW_MORE_TOKENS,JE as MULTIINPUT_VALUE_HELP_LABEL,BT as NAVIGATION_MENU_POPOVER_HIDDEN_TEXT,bE as PANEL_ICON,gE as RANGE_SLIDER_ARIA_DESCRIPTION,pE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,mE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,jE as RATING_INDICATOR_ARIA_DESCRIPTION,xE as RATING_INDICATOR_TEXT,vE as RATING_INDICATOR_TOOLTIP_TEXT,kE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,yE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,wE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,qE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,LE as SELECT_OPTIONS,OE as SELECT_ROLE_DESCRIPTION,NE as SHOW_SELECTED_BUTTON,zE as SLIDER_ARIA_DESCRIPTION,CT as SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP,LT as SPLIT_BUTTON_DESCRIPTION,NT as SPLIT_BUTTON_KEYBOARD_HINT,RT as STEPINPUT_DEC_ICON_TITLE,OT as STEPINPUT_INC_ICON_TITLE,U_ as TABCONTAINER_END_OVERFLOW,P_ as TABCONTAINER_NEXT_ICON_ACC_NAME,B_ as TABCONTAINER_OVERFLOW_MENU_TITLE,t_ as TABCONTAINER_POPOVER_CANCEL_BUTTON,D_ as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,n_ as TABCONTAINER_SUBTABS_DESCRIPTION,T_ as TABLE_GROUP_ROW_ARIA_LABEL,E_ as TABLE_HEADER_ROW_INFORMATION,ZT as TABLE_MORE,QT as TABLE_MORE_DESCRIPTION,WT as TABLE_NO_DATA,FT as TABLE_ROW_POPIN,__ as TABLE_ROW_POSITION,YT as TABLE_ROW_SELECTOR,XT as TABLE_SELECTION,N_ as TAB_ARIA_DESIGN_CRITICAL,L_ as TAB_ARIA_DESIGN_NEGATIVE,C_ as TAB_ARIA_DESIGN_NEUTRAL,O_ as TAB_ARIA_DESIGN_POSITIVE,S_ as TAB_SPLIT_ROLE_DESCRIPTION,S as TAG_DESCRIPTION_TAG,D as TAG_ERROR,t as TAG_INFORMATION,P as TAG_ROLE_DESCRIPTION,U as TAG_SUCCESS,B as TAG_WARNING,o_ as TEXTAREA_CHARACTERS_EXCEEDED,s_ as TEXTAREA_CHARACTERS_LEFT,V_ as TIMEPICKER_CANCEL_BUTTON,Y_ as TIMEPICKER_CLOCK_DIAL_LABEL,c_ as TIMEPICKER_HOURS_LABEL,W_ as TIMEPICKER_INPUTS_ENTER_HOURS,F_ as TIMEPICKER_INPUTS_ENTER_MINUTES,Z_ as TIMEPICKER_INPUTS_ENTER_SECONDS,H_ as TIMEPICKER_INPUT_DESCRIPTION,M_ as TIMEPICKER_MINUTES_LABEL,X_ as TIMEPICKER_POPOVER_ACCESSIBLE_NAME,G_ as TIMEPICKER_SECONDS_LABEL,K_ as TIMEPICKER_SUBMIT_BUTTON,u_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,d_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,l_ as TOKENIZER_ARIA_CONTAIN_TOKEN,h_ as TOKENIZER_ARIA_LABEL,i_ as TOKENIZER_POPOVER_REMOVE,J_ as TOKENIZER_SHOW_ALL_ITEMS,a_ as TOKEN_ARIA_DELETABLE,f_ as TOKEN_ARIA_LABEL,cT as TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL,b_ as TREE_ITEM_ARIA_LABEL,m_ as TREE_ITEM_COLLAPSE_NODE,g_ as TREE_ITEM_EXPAND_NODE,k_ as VALUE_STATE_ERROR,dE as VALUE_STATE_ERROR_ALREADY_SELECTED,w_ as VALUE_STATE_INFORMATION,y_ as VALUE_STATE_SUCCESS,p_ as VALUE_STATE_TYPE_ERROR,j_ as VALUE_STATE_TYPE_INFORMATION,x_ as VALUE_STATE_TYPE_SUCCESS,v_ as VALUE_STATE_TYPE_WARNING,q_ as VALUE_STATE_WARNING,IT as YEAR_PICKER_DESCRIPTION,eT as default};