const E="\u5361\u7247\u5167\u5BB9",_="\u5361\u7247",T="\u5361\u7247\u8868\u982D",A="\u4E92\u52D5\u5F0F\u5361\u7247\u8868\u982D",I="\u865B\u64EC\u500B\u4EBA\u982D\u50CF",R="\u5DF2\u986F\u793A {0}\u3001\u5DF2\u96B1\u85CF {1}\u3002",O="\u91DD\u5C0D\u5B8C\u6574\u6E05\u55AE\u800C\u555F\u7528\u3002",L="\u500B\u5225\u865B\u64EC\u500B\u4EBA\u982D\u50CF\u3002",N="\u7D50\u5408\u865B\u64EC\u500B\u4EBA\u982D\u50CF\u3002",C="\u6309\u7BAD\u982D\u9375\u4EE5\u79FB\u52D5\u3002",S="\u6A19\u7C64",P="\u6A19\u7C64\u6309\u9215",D="\u932F\u8AA4",B="\u8B66\u544A",U="\u6210\u529F",t="\u8CC7\u8A0A",n="{0}/{1}",s="\u8DEF\u5F91\u6307\u5F15\u8FFD\u8E64",o="\u66F4\u591A",c="\u53D6\u6D88",M="\u8ACB\u7A0D\u5019",G="\u6B63\u5411\u4F5C\u696D",K="\u8CA0\u5411\u4F5C\u696D",V="\u5F37\u8ABF",H="\u4ECA\u5929",X="\u9078\u53D6\u7684\u65E5\u671F",Y="\u5DE5\u4F5C\u65E5",W="\u975E\u5DE5\u4F5C\u65E5",F="/",Z="\u5DF2\u986F\u793A\u9805\u76EE {0}/{1}",Q="\u4E0A\u4E00\u9801",e="\u4E0B\u4E00\u9801",a="\u8ABF\u8272\u76E4 - \u9810\u5148\u5B9A\u7FA9\u7684\u8272\u5F69",h="\u8ABF\u8272\u76E4",l="\u8272\u5F69",r="\u53D6\u6D88",f="\u78BA\u5B9A",p="\u66F4\u6539\u8272\u5F69",d="\u66F4\u591A\u8272\u5F69...",i="\u9810\u8A2D\u8272\u5F69",u="Alpha \u63A7\u5236",J="\u8272\u8ABF\u63A7\u5236",b="\u5341\u516D\u9032\u4F4D",g="\u7D05\u8272",m="\u7DA0\u8272",v="\u85CD\u8272",x="Alpha",z="\u958B\u555F\u9078\u64C7\u5668",j="\u65E5\u671F\u8F38\u5165",k="\u65E5\u671F\u6642\u9593\u8F38\u5165",q="\u65E5\u671F\u7BC4\u570D\u8F38\u5165",w="\u9078\u64C7\u65E5\u671F",y="\u9078\u64C7\u65E5\u671F\u548C\u6642\u9593",$="\u9078\u64C7\u65E5\u671F\u7BC4\u570D",EE="\u522A\u9664",_E="\u2013",TE="\u7A7A\u767D\u503C",AE="\u700F\u89BD...",IE="\u4E0A\u50B3\u6A94\u6848",RE="\u7FA4\u7D44\u8868\u982D",OE="\u6E05\u55AE\u65B9\u584A",LE="\u9078\u64C7\u9078\u9805",NE="\u50C5\u986F\u793A\u6240\u9078\u9805\u76EE",CE="\u53EF\u7528\u5EFA\u8B70",SE="\u5168\u9078 ({0}/{1})",PE="\u9078\u64C7",DE="1 \u500B\u53EF\u7528\u7684\u7D50\u679C",BE="{0} \u500B\u53EF\u7528\u7684\u7D50\u679C",UE="\u6C92\u6709\u7D50\u679C",tE="\u6E05\u9664",nE="\u8F15\u5FAE",sE="\u5F37\u8ABF",oE="\u6E05\u55AE\u9805\u76EE {0} / {1}",cE="\u5DF2\u52FE\u9078",ME="\u672A\u9078\u64C7",GE="\u7FA4\u7D44\u8868\u982D",KE="\u591A\u91CD\u9078\u64C7\u6A21\u5F0F",VE="\u9805\u76EE\u9078\u64C7\u3002",HE="\u5305\u542B\u53EF\u9078\u64C7\u7684\u9805\u76EE",XE="\u5305\u542B\u53EF\u591A\u91CD\u9078\u64C7\u7684\u9805\u76EE",YE="\u5305\u542B\u53EF\u522A\u9664\u7684\u9805\u76EE",WE="\u8A0A\u606F\u5217\u95DC\u9589",FE="\u53EF\u95DC\u9589",ZE="\u932F\u8AA4\u8CC7\u8A0A\u5217",QE="\u8B66\u544A\u8CC7\u8A0A\u5217",eE="\u6210\u529F\u8CC7\u8A0A\u5217",aE="\u8CC7\u8A0A\u5217",hE="\u81EA\u8A02\u8CC7\u8A0A\u5217",lE="\u78BA\u5B9A",rE="\u53EF\u7528\u9078\u9805",fE="\u53EF\u7528\u503C",pE="\u5DF2\u9078\u64C7\u6B64\u503C\u3002",dE="\u591A\u91CD\u503C\u8F38\u5165",iE="\u66F4\u591A ({0} \u500B)",uE="\u986F\u793A\u8F38\u5165\u8F14\u52A9\u8AAA\u660E",JE="\u5C55\u958B/\u6536\u7E2E",bE="\u7BC4\u570D",gE="\u5DE6\u5074\u63A7\u9EDE",mE="\u53F3\u5074\u63A7\u9EDE",vE="\u5206\u7D1A",xE="\u5206\u7D1A\u6307\u793A\u78BC",zE="\u5FC5\u8981",jE="\u62D2\u7D55",kE="\u5340\u6BB5\u6309\u9215\u7FA4\u7D44",qE="\u6309\u4E0B SPACE \u6216 ENTER \u4EE5\u9078\u64C7\u9805\u76EE",wE="\u5340\u6BB5\u6309\u9215",yE="\u6ED1\u687F\u63A7\u9EDE",$E="\u8F03\u591A",E_="\u8868\u982D\u5217 1/{0}",__="{0}/{1}",T_="\u7FA4\u7D44\u8868\u982D\u5217",A_="\u9805\u76EE\u9078\u64C7",I_="\u9078\u64C7\u6240\u6709\u5217",R_="\u7A7A\u767D",O_="\u6B63\u9762",L_="\u8CA0\u9762",N_="\u91CD\u8981",C_="\u4E00\u822C",S_="\u542B\u5B50\u9805\u76EE\u7684\u7D22\u5F15\u6A19\u7C64",P_="\u4E0B\u4E00\u6B65",D_="\u4E0A\u4E00\u6B65",B_="\u6EA2\u4F4D\u529F\u80FD\u8868",U_="\u66F4\u591A",t_="\u53D6\u6D88",n_="\u6309\u5411\u4E0B\u9375\u4EE5\u958B\u555F\u5B50\u9805\u76EE\u529F\u80FD\u8868",s_="\u5269\u4E0B {0} \u500B\u5B57\u5143",o_="\u8D85\u904E {0} \u500B\u5B57\u5143",c_="\u5C0F\u6642",M_="\u5206",G_="\u79D2",K_="\u6210\u529F",V_="\u53D6\u6D88",H_="\u6642\u9593\u8F38\u5165",X_="\u9078\u64C7\u6642\u9593",Y_="\u9418\u9762",W_="\u8ACB\u8F38\u5165\u5C0F\u6642",F_="\u8ACB\u8F38\u5165\u5206\u9418",Z_="\u8ACB\u8F38\u5165\u79D2\u6578",Q_="\u6301\u7E8C\u671F\u8F38\u5165",e_="\u65E5\u671F",a_="\u6642\u9593",h_="\u53EF\u522A\u9664",l_="\u8A18\u865F",r_="\u7121\u8A18\u865F",f_="\u5305\u542B 1 \u500B\u8A18\u865F",p_="\u5305\u542B {0} \u500B\u8A18\u865F",d_="\u8868\u5FB5\u53C3\u6578\u91CF\u5316\u5668",i_="\u6240\u6709\u9805\u76EE",u_="{0} \u500B\u9805\u76EE",J_="\u6A39\u72C0\u7D50\u69CB\u9805\u76EE",b_="\u5C55\u958B\u7BC0\u9EDE",g_="\u6536\u7E2E\u7BC0\u9EDE",m_="\u503C\u72C0\u614B (\u932F\u8AA4)",v_="\u503C\u72C0\u614B (\u8B66\u544A)",x_="\u503C\u72C0\u614B (\u6210\u529F)",z_="\u503C\u72C0\u614B\u8CC7\u8A0A",j_="\u7121\u6548\u8F38\u5165\u9805",k_="\u5DF2\u767C\u51FA\u8B66\u544A",q_="\u8CC7\u8A0A\u8F38\u5165\u9805",w_="\u5DF2\u6210\u529F\u9A57\u8B49\u8F38\u5165\u9805",y_="\u4E0B\u4E00\u6B65",$_="\u4E0A\u4E00\u6B65",ET="\u9031\u6578",_T="\u975E\u5DE5\u4F5C\u65E5",TT="\u4ECA\u5929",AT="\u6708\u4EFD\u9078\u64C7\u5668",IT="\u5E74\u4EFD\u9078\u64C7\u5668",RT="\u6E1B\u5C11",OT="\u589E\u52A0",LT="\u5206\u5272\u6309\u9215",NT="\u6309\u4E0B\u7A7A\u683C\u9375\u6216 Enter \u4EE5\u9A45\u52D5\u9810\u8A2D\u52D5\u4F5C\uFF0C\u4EE5\u53CA Alt + \u5411\u4E0B\u7BAD\u982D\u6216 F4 \u4EE5\u9A45\u52D5\u7BAD\u982D\u52D5\u4F5C",CT="\u958B\u555F\u529F\u80FD\u8868",ST="\u8FD4\u56DE",PT="\u62D2\u7D55",DT="\u5F9E\u529F\u80FD\u8868\u9078\u53D6\u9078\u9805",BT="\u700F\u89BD",UT="\u4E92\u52D5\u8868\u982D",tT="\u4F7F\u7528\u3000Shift\u3000+\u3000\u7BAD\u982D\u9375\u4EE5\u8ABF\u6574\u5927\u5C0F",nT="\u4F7F\u7528\u7BAD\u982D\u9375\u4EE5\u79FB\u52D5",sT="\u4F7F\u7528\u7BAD\u982D\u9375\u4EE5\u79FB\u52D5\uFF0C\u4F7F\u7528\u3000Shift\u3000+\u3000\u7BAD\u982D\u9375\u4EE5\u8ABF\u6574\u5927\u5C0F",oT="\uFF1A",cT="\u9644\u52A0\u9078\u9805",MT="\u82E5\u60A8\u8981\u7E7C\u7E8C\uFF0C\u8ACB\u52FE\u9078\u6B64\u65B9\u584A\u3002",GT="\u8ACB\u586B\u5BEB\u6B64\u6B04\u4F4D\u6216\u5728\u6E05\u55AE\u4E2D\u9078\u64C7\u9805\u76EE\u3002",KT="\u8ACB\u5728\u6E05\u55AE\u4E2D\u9078\u64C7\u9805\u76EE\u3002",VT="\u8ACB\u9078\u64C7\u5176\u4E2D\u4E00\u500B\u9078\u9805\u3002",HT="\u8ACB\u586B\u5BEB\u6B64\u6B04\u4F4D\u3002",XT="\u9078\u64C7",YT="\u5217\u9078\u64C7\u5668",WT="\u7121\u8CC7\u6599",FT="\u5217\u5C0D\u8A71\u65B9\u584A",ZT="\u66F4\u591A",QT="\u6309\u4E0B Enter \u6216\u7A7A\u683C\u9375\u8F09\u5165\u66F4\u591A\u5217";var eT={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:C,TAG_DESCRIPTION_TAG:S,TAG_ROLE_DESCRIPTION:P,TAG_ERROR:D,TAG_WARNING:B,TAG_SUCCESS:U,TAG_INFORMATION:t,BREADCRUMB_ITEM_POS:n,BREADCRUMBS_ARIA_LABEL:s,BREADCRUMBS_OVERFLOW_ARIA_LABEL:o,BREADCRUMBS_CANCEL_BUTTON:c,BUSY_INDICATOR_TITLE:M,BUTTON_ARIA_TYPE_ACCEPT:G,BUTTON_ARIA_TYPE_REJECT:K,BUTTON_ARIA_TYPE_EMPHASIZED:V,CAL_LEGEND_TODAY_TEXT:H,CAL_LEGEND_SELECTED_TEXT:X,CAL_LEGEND_WORKING_DAY_TEXT:Y,CAL_LEGEND_NON_WORKING_DAY_TEXT:W,CAROUSEL_OF_TEXT:F,CAROUSEL_DOT_TEXT:Z,CAROUSEL_PREVIOUS_ARROW_TEXT:Q,CAROUSEL_NEXT_ARROW_TEXT:e,COLORPALETTE_CONTAINER_LABEL:a,COLORPALETTE_POPOVER_TITLE:h,COLORPALETTE_COLOR_LABEL:l,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:r,COLOR_PALETTE_DIALOG_OK_BUTTON:f,COLOR_PALETTE_DIALOG_TITLE:p,COLOR_PALETTE_MORE_COLORS_TEXT:d,COLOR_PALETTE_DEFAULT_COLOR_TEXT:i,COLORPICKER_ALPHA_SLIDER:u,COLORPICKER_HUE_SLIDER:J,COLORPICKER_HEX:b,COLORPICKER_RED:g,COLORPICKER_GREEN:m,COLORPICKER_BLUE:v,COLORPICKER_ALPHA:x,DATEPICKER_OPEN_ICON_TITLE:z,DATEPICKER_DATE_DESCRIPTION:j,DATETIME_DESCRIPTION:k,DATERANGE_DESCRIPTION:q,DATEPICKER_POPOVER_ACCESSIBLE_NAME:w,DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME:y,DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME:$,DELETE:EE,EMPTY_INDICATOR_SYMBOL:_E,EMPTY_INDICATOR_ACCESSIBLE_TEXT:TE,FILEUPLOAD_BROWSE:AE,FILEUPLOADER_TITLE:IE,GROUP_HEADER_TEXT:RE,SELECT_ROLE_DESCRIPTION:OE,SELECT_OPTIONS:LE,SHOW_SELECTED_BUTTON:NE,INPUT_SUGGESTIONS:CE,MCB_SELECTED_ITEMS:SE,INPUT_SUGGESTIONS_TITLE:PE,INPUT_SUGGESTIONS_ONE_HIT:DE,INPUT_SUGGESTIONS_MORE_HITS:BE,INPUT_SUGGESTIONS_NO_HIT:UE,INPUT_CLEAR_ICON_ACC_NAME:tE,LINK_SUBTLE:nE,LINK_EMPHASIZED:sE,LIST_ITEM_POSITION:oE,LIST_ITEM_SELECTED:cE,LIST_ITEM_NOT_SELECTED:ME,LIST_ITEM_GROUP_HEADER:GE,ARIA_LABEL_LIST_ITEM_CHECKBOX:KE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:VE,ARIA_LABEL_LIST_SELECTABLE:HE,ARIA_LABEL_LIST_MULTISELECTABLE:XE,ARIA_LABEL_LIST_DELETABLE:YE,MESSAGE_STRIP_CLOSE_BUTTON:WE,MESSAGE_STRIP_CLOSABLE:FE,MESSAGE_STRIP_ERROR:ZE,MESSAGE_STRIP_WARNING:QE,MESSAGE_STRIP_SUCCESS:eE,MESSAGE_STRIP_INFORMATION:aE,MESSAGE_STRIP_CUSTOM:hE,MULTICOMBOBOX_DIALOG_OK_BUTTON:lE,COMBOBOX_AVAILABLE_OPTIONS:rE,INPUT_AVALIABLE_VALUES:fE,VALUE_STATE_ERROR_ALREADY_SELECTED:pE,MULTIINPUT_ROLEDESCRIPTION_TEXT:dE,MULTIINPUT_SHOW_MORE_TOKENS:iE,MULTIINPUT_VALUE_HELP_LABEL:uE,PANEL_ICON:JE,RANGE_SLIDER_ARIA_DESCRIPTION:bE,RANGE_SLIDER_START_HANDLE_DESCRIPTION:gE,RANGE_SLIDER_END_HANDLE_DESCRIPTION:mE,RATING_INDICATOR_TOOLTIP_TEXT:vE,RATING_INDICATOR_TEXT:xE,RATING_INDICATOR_ARIA_DESCRIPTION:zE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:jE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:kE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:qE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:wE,SLIDER_ARIA_DESCRIPTION:yE,LOAD_MORE_TEXT:$E,TABLE_HEADER_ROW_INFORMATION:E_,TABLE_ROW_POSITION:__,TABLE_GROUP_ROW_ARIA_LABEL:T_,ARIA_LABEL_ROW_SELECTION:A_,ARIA_LABEL_SELECT_ALL_CHECKBOX:I_,ARIA_LABEL_EMPTY_CELL:R_,TAB_ARIA_DESIGN_POSITIVE:O_,TAB_ARIA_DESIGN_NEGATIVE:L_,TAB_ARIA_DESIGN_CRITICAL:N_,TAB_ARIA_DESIGN_NEUTRAL:C_,TAB_SPLIT_ROLE_DESCRIPTION:S_,TABCONTAINER_NEXT_ICON_ACC_NAME:P_,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:D_,TABCONTAINER_OVERFLOW_MENU_TITLE:B_,TABCONTAINER_END_OVERFLOW:U_,TABCONTAINER_POPOVER_CANCEL_BUTTON:t_,TABCONTAINER_SUBTABS_DESCRIPTION:n_,TEXTAREA_CHARACTERS_LEFT:s_,TEXTAREA_CHARACTERS_EXCEEDED:o_,TIMEPICKER_HOURS_LABEL:c_,TIMEPICKER_MINUTES_LABEL:M_,TIMEPICKER_SECONDS_LABEL:G_,TIMEPICKER_SUBMIT_BUTTON:K_,TIMEPICKER_CANCEL_BUTTON:V_,TIMEPICKER_INPUT_DESCRIPTION:H_,TIMEPICKER_POPOVER_ACCESSIBLE_NAME:X_,TIMEPICKER_CLOCK_DIAL_LABEL:Y_,TIMEPICKER_INPUTS_ENTER_HOURS:W_,TIMEPICKER_INPUTS_ENTER_MINUTES:F_,TIMEPICKER_INPUTS_ENTER_SECONDS:Z_,DURATION_INPUT_DESCRIPTION:Q_,DATETIME_PICKER_DATE_BUTTON:e_,DATETIME_PICKER_TIME_BUTTON:a_,TOKEN_ARIA_DELETABLE:h_,TOKEN_ARIA_LABEL:l_,TOKENIZER_ARIA_CONTAIN_TOKEN:r_,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:f_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:p_,TOKENIZER_ARIA_LABEL:d_,TOKENIZER_POPOVER_REMOVE:i_,TOKENIZER_SHOW_ALL_ITEMS:u_,TREE_ITEM_ARIA_LABEL:J_,TREE_ITEM_EXPAND_NODE:b_,TREE_ITEM_COLLAPSE_NODE:g_,VALUE_STATE_TYPE_ERROR:m_,VALUE_STATE_TYPE_WARNING:v_,VALUE_STATE_TYPE_SUCCESS:x_,VALUE_STATE_TYPE_INFORMATION:z_,VALUE_STATE_ERROR:j_,VALUE_STATE_WARNING:k_,VALUE_STATE_INFORMATION:q_,VALUE_STATE_SUCCESS:w_,CALENDAR_HEADER_NEXT_BUTTON:y_,CALENDAR_HEADER_PREVIOUS_BUTTON:$_,DAY_PICKER_WEEK_NUMBER_TEXT:ET,DAY_PICKER_NON_WORKING_DAY:_T,DAY_PICKER_TODAY:TT,MONTH_PICKER_DESCRIPTION:AT,YEAR_PICKER_DESCRIPTION:IT,STEPINPUT_DEC_ICON_TITLE:RT,STEPINPUT_INC_ICON_TITLE:OT,SPLIT_BUTTON_DESCRIPTION:LT,SPLIT_BUTTON_KEYBOARD_HINT:NT,SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP:CT,MENU_BACK_BUTTON_ARIA_LABEL:ST,MENU_CLOSE_BUTTON_ARIA_LABEL:PT,MENU_POPOVER_ACCESSIBLE_NAME:DT,NAVIGATION_MENU_POPOVER_HIDDEN_TEXT:BT,DIALOG_HEADER_ARIA_ROLE_DESCRIPTION:UT,DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE:tT,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE:nT,DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE:sT,LABEL_COLON:oT,TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL:cT,FORM_CHECKABLE_REQUIRED:MT,FORM_MIXED_TEXTFIELD_REQUIRED:GT,FORM_SELECTABLE_REQUIRED:KT,FORM_SELECTABLE_REQUIRED2:VT,FORM_TEXTFIELD_REQUIRED:HT,TABLE_SELECTION:XT,TABLE_ROW_SELECTOR:YT,TABLE_NO_DATA:WT,TABLE_ROW_POPIN:FT,TABLE_MORE:ZT,TABLE_MORE_DESCRIPTION:QT};export{E as ARIA_LABEL_CARD_CONTENT,R_ as ARIA_LABEL_EMPTY_CELL,YE as ARIA_LABEL_LIST_DELETABLE,KE as ARIA_LABEL_LIST_ITEM_CHECKBOX,VE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,XE as ARIA_LABEL_LIST_MULTISELECTABLE,HE as ARIA_LABEL_LIST_SELECTABLE,A_ as ARIA_LABEL_ROW_SELECTION,I_ as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,C as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,s as BREADCRUMBS_ARIA_LABEL,c as BREADCRUMBS_CANCEL_BUTTON,o as BREADCRUMBS_OVERFLOW_ARIA_LABEL,n as BREADCRUMB_ITEM_POS,M as BUSY_INDICATOR_TITLE,G as BUTTON_ARIA_TYPE_ACCEPT,V as BUTTON_ARIA_TYPE_EMPHASIZED,K as BUTTON_ARIA_TYPE_REJECT,y_ as CALENDAR_HEADER_NEXT_BUTTON,$_ as CALENDAR_HEADER_PREVIOUS_BUTTON,W as CAL_LEGEND_NON_WORKING_DAY_TEXT,X as CAL_LEGEND_SELECTED_TEXT,H as CAL_LEGEND_TODAY_TEXT,Y as CAL_LEGEND_WORKING_DAY_TEXT,Z as CAROUSEL_DOT_TEXT,e as CAROUSEL_NEXT_ARROW_TEXT,F as CAROUSEL_OF_TEXT,Q as CAROUSEL_PREVIOUS_ARROW_TEXT,l as COLORPALETTE_COLOR_LABEL,a as COLORPALETTE_CONTAINER_LABEL,h as COLORPALETTE_POPOVER_TITLE,x as COLORPICKER_ALPHA,u as COLORPICKER_ALPHA_SLIDER,v as COLORPICKER_BLUE,m as COLORPICKER_GREEN,b as COLORPICKER_HEX,J as COLORPICKER_HUE_SLIDER,g as COLORPICKER_RED,i as COLOR_PALETTE_DEFAULT_COLOR_TEXT,r as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,f as COLOR_PALETTE_DIALOG_OK_BUTTON,p as COLOR_PALETTE_DIALOG_TITLE,d as COLOR_PALETTE_MORE_COLORS_TEXT,rE as COMBOBOX_AVAILABLE_OPTIONS,j as DATEPICKER_DATE_DESCRIPTION,z as DATEPICKER_OPEN_ICON_TITLE,w as DATEPICKER_POPOVER_ACCESSIBLE_NAME,$ as DATERANGEPICKER_POPOVER_ACCESSIBLE_NAME,q as DATERANGE_DESCRIPTION,y as DATETIMEPICKER_POPOVER_ACCESSIBLE_NAME,k as DATETIME_DESCRIPTION,e_ as DATETIME_PICKER_DATE_BUTTON,a_ as DATETIME_PICKER_TIME_BUTTON,_T as DAY_PICKER_NON_WORKING_DAY,TT as DAY_PICKER_TODAY,ET as DAY_PICKER_WEEK_NUMBER_TEXT,EE as DELETE,nT as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,sT as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,tT as DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,UT as DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,Q_ as DURATION_INPUT_DESCRIPTION,TE as EMPTY_INDICATOR_ACCESSIBLE_TEXT,_E as EMPTY_INDICATOR_SYMBOL,IE as FILEUPLOADER_TITLE,AE as FILEUPLOAD_BROWSE,MT as FORM_CHECKABLE_REQUIRED,GT as FORM_MIXED_TEXTFIELD_REQUIRED,KT as FORM_SELECTABLE_REQUIRED,VT as FORM_SELECTABLE_REQUIRED2,HT as FORM_TEXTFIELD_REQUIRED,RE as GROUP_HEADER_TEXT,fE as INPUT_AVALIABLE_VALUES,tE as INPUT_CLEAR_ICON_ACC_NAME,CE as INPUT_SUGGESTIONS,BE as INPUT_SUGGESTIONS_MORE_HITS,UE as INPUT_SUGGESTIONS_NO_HIT,DE as INPUT_SUGGESTIONS_ONE_HIT,PE as INPUT_SUGGESTIONS_TITLE,oT as LABEL_COLON,sE as LINK_EMPHASIZED,nE as LINK_SUBTLE,GE as LIST_ITEM_GROUP_HEADER,ME as LIST_ITEM_NOT_SELECTED,oE as LIST_ITEM_POSITION,cE as LIST_ITEM_SELECTED,$E as LOAD_MORE_TEXT,SE as MCB_SELECTED_ITEMS,ST as MENU_BACK_BUTTON_ARIA_LABEL,PT as MENU_CLOSE_BUTTON_ARIA_LABEL,DT as MENU_POPOVER_ACCESSIBLE_NAME,FE as MESSAGE_STRIP_CLOSABLE,WE as MESSAGE_STRIP_CLOSE_BUTTON,hE as MESSAGE_STRIP_CUSTOM,ZE as MESSAGE_STRIP_ERROR,aE as MESSAGE_STRIP_INFORMATION,eE as MESSAGE_STRIP_SUCCESS,QE as MESSAGE_STRIP_WARNING,AT as MONTH_PICKER_DESCRIPTION,lE as MULTICOMBOBOX_DIALOG_OK_BUTTON,dE as MULTIINPUT_ROLEDESCRIPTION_TEXT,iE as MULTIINPUT_SHOW_MORE_TOKENS,uE as MULTIINPUT_VALUE_HELP_LABEL,BT as NAVIGATION_MENU_POPOVER_HIDDEN_TEXT,JE as PANEL_ICON,bE as RANGE_SLIDER_ARIA_DESCRIPTION,mE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,gE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,zE as RATING_INDICATOR_ARIA_DESCRIPTION,xE as RATING_INDICATOR_TEXT,vE as RATING_INDICATOR_TOOLTIP_TEXT,jE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,wE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,qE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,kE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,LE as SELECT_OPTIONS,OE as SELECT_ROLE_DESCRIPTION,NE as SHOW_SELECTED_BUTTON,yE as SLIDER_ARIA_DESCRIPTION,CT as SPLIT_BUTTON_ARROW_BUTTON_TOOLTIP,LT as SPLIT_BUTTON_DESCRIPTION,NT as SPLIT_BUTTON_KEYBOARD_HINT,RT as STEPINPUT_DEC_ICON_TITLE,OT as STEPINPUT_INC_ICON_TITLE,U_ as TABCONTAINER_END_OVERFLOW,P_ as TABCONTAINER_NEXT_ICON_ACC_NAME,B_ as TABCONTAINER_OVERFLOW_MENU_TITLE,t_ as TABCONTAINER_POPOVER_CANCEL_BUTTON,D_ as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,n_ as TABCONTAINER_SUBTABS_DESCRIPTION,T_ as TABLE_GROUP_ROW_ARIA_LABEL,E_ as TABLE_HEADER_ROW_INFORMATION,ZT as TABLE_MORE,QT as TABLE_MORE_DESCRIPTION,WT as TABLE_NO_DATA,FT as TABLE_ROW_POPIN,__ as TABLE_ROW_POSITION,YT as TABLE_ROW_SELECTOR,XT as TABLE_SELECTION,N_ as TAB_ARIA_DESIGN_CRITICAL,L_ as TAB_ARIA_DESIGN_NEGATIVE,C_ as TAB_ARIA_DESIGN_NEUTRAL,O_ as TAB_ARIA_DESIGN_POSITIVE,S_ as TAB_SPLIT_ROLE_DESCRIPTION,S as TAG_DESCRIPTION_TAG,D as TAG_ERROR,t as TAG_INFORMATION,P as TAG_ROLE_DESCRIPTION,U as TAG_SUCCESS,B as TAG_WARNING,o_ as TEXTAREA_CHARACTERS_EXCEEDED,s_ as TEXTAREA_CHARACTERS_LEFT,V_ as TIMEPICKER_CANCEL_BUTTON,Y_ as TIMEPICKER_CLOCK_DIAL_LABEL,c_ as TIMEPICKER_HOURS_LABEL,W_ as TIMEPICKER_INPUTS_ENTER_HOURS,F_ as TIMEPICKER_INPUTS_ENTER_MINUTES,Z_ as TIMEPICKER_INPUTS_ENTER_SECONDS,H_ as TIMEPICKER_INPUT_DESCRIPTION,M_ as TIMEPICKER_MINUTES_LABEL,X_ as TIMEPICKER_POPOVER_ACCESSIBLE_NAME,G_ as TIMEPICKER_SECONDS_LABEL,K_ as TIMEPICKER_SUBMIT_BUTTON,f_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,p_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,r_ as TOKENIZER_ARIA_CONTAIN_TOKEN,d_ as TOKENIZER_ARIA_LABEL,i_ as TOKENIZER_POPOVER_REMOVE,u_ as TOKENIZER_SHOW_ALL_ITEMS,h_ as TOKEN_ARIA_DELETABLE,l_ as TOKEN_ARIA_LABEL,cT as TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL,J_ as TREE_ITEM_ARIA_LABEL,g_ as TREE_ITEM_COLLAPSE_NODE,b_ as TREE_ITEM_EXPAND_NODE,j_ as VALUE_STATE_ERROR,pE as VALUE_STATE_ERROR_ALREADY_SELECTED,q_ as VALUE_STATE_INFORMATION,w_ as VALUE_STATE_SUCCESS,m_ as VALUE_STATE_TYPE_ERROR,z_ as VALUE_STATE_TYPE_INFORMATION,x_ as VALUE_STATE_TYPE_SUCCESS,v_ as VALUE_STATE_TYPE_WARNING,k_ as VALUE_STATE_WARNING,IT as YEAR_PICKER_DESCRIPTION,eT as default};
