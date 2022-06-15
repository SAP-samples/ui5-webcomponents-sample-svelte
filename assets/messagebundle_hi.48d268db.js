const E="\u0915\u093E\u0930\u094D\u0921 \u0938\u093E\u092E\u0917\u094D\u0930\u0940",_="\u0915\u093E\u0930\u094D\u0921",T="\u0915\u093E\u0930\u094D\u0921 \u0936\u0940\u0930\u094D\u0937\u0932\u0947\u0916",A="\u0938\u0939\u092D\u093E\u0917\u0940 \u0915\u093E\u0930\u094D\u0921 \u0939\u0947\u0921\u0930",I="\u0905\u0935\u0924\u093E\u0930",R="{0} \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u093F\u0924, {1} \u091B\u093F\u092A\u093E \u0939\u0941\u0906.",O="\u092A\u0942\u0930\u0940 \u0938\u0942\u091A\u0940 \u0915\u0947 \u0932\u093F\u090F \u0938\u0915\u094D\u0930\u093F\u092F \u0915\u0930\u0947\u0902.",L="\u0935\u094D\u092F\u0915\u094D\u0924\u093F\u0917\u0924 \u0905\u0935\u0924\u093E\u0930.",N="\u091C\u0941\u0921\u093C\u0947 \u0939\u0941\u090F \u0905\u0935\u0924\u093E\u0930.",C="\u0932\u0947 \u091C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0924\u0940\u0930 \u0915\u0941\u0902\u091C\u093F\u092F\u093E\u0902 \u0926\u092C\u093E\u090F\u0902.",S="\u092C\u0948\u091C",P="{1} \u092E\u0947\u0902 \u0938\u0947 {0}",D="\u092C\u094D\u0930\u0947\u0921\u0915\u094D\u0930\u092E \u0938\u0924\u094D\u092F\u093E\u092A\u0928",B="\u0905\u0927\u093F\u0915",U="\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",o="\u0915\u0943\u092A\u092F\u093E \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902",t="\u0938\u0915\u093E\u0930\u093E\u0924\u094D\u092E\u0915 \u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908",n="\u0928\u0915\u093E\u0930\u093E\u0924\u094D\u092E\u0915 \u0915\u093E\u0930\u094D\u0930\u0935\u093E\u0908",c="\u092C\u0932 \u0926\u093F\u092F\u093E \u0917\u092F\u093E",s="\u0907\u0938\u0915\u093E",M="\u0906\u0907\u091F\u092E {0} / {1} \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u093F\u0924 \u0915\u093F\u090F \u0917\u090F",G="\u092A\u093F\u091B\u0932\u093E \u092A\u0943\u0937\u094D\u0920",K="\u0905\u0917\u0932\u093E \u092A\u0943\u0937\u094D\u0920",H="\u0930\u0902\u0917 \u092A\u0948\u0932\u0947\u091F - \u092A\u0939\u0932\u0947 \u0938\u0947 \u092A\u0930\u093F\u092D\u093E\u0937\u093F\u0924 \u0930\u0902\u0917",V="\u0930\u0902\u0917 \u092A\u0948\u0932\u0947\u091F",X="\u0930\u0902\u0917",W="\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",Y="\u0920\u0940\u0915",F="\u0930\u0902\u0917 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u093F\u0924 \u0915\u0930\u0947\u0902",Z="\u0905\u0927\u093F\u0915 \u0930\u0902\u0917...",e="Alpha control",l="Hue control",a="Hexadecimal",r="Red",d="Green",u="Blue",h="Alpha",p="\u091A\u0941\u0928\u0928\u0947\u0935\u093E\u0932\u093E \u0916\u094B\u0932\u0947\u0902",i="\u0926\u093F\u0928\u093E\u0902\u0915 \u0907\u0928\u092A\u0941\u091F",m="\u0926\u093F\u0928\u093E\u0902\u0915 \u0938\u092E\u092F \u0907\u0928\u092A\u0941\u091F",x="\u0926\u093F\u0928\u093E\u0902\u0915 \u0936\u094D\u0930\u0947\u0923\u0940 \u0907\u0928\u092A\u0941\u091F",J="\u0939\u091F\u093E\u090F\u0902",b="\u092C\u094D\u0930\u093E\u0909\u091C\u093C \u0915\u0930\u0947\u0902 ...",f="\u092B\u093C\u093E\u0907\u0932 \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902",g="\u0938\u092E\u0942\u0939 \u0936\u0940\u0930\u094D\u0937\u0932\u0947\u0916",v="\u0915\u0949\u092E\u094D\u092C\u094B \u092C\u0949\u0915\u094D\u0938 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",j="\u0935\u093F\u0915\u0932\u094D\u092A\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",k="\u0938\u0941\u091D\u093E\u0935 \u0909\u092A\u0932\u092C\u094D\u0927 \u0939\u0948\u0902",q="\u091A\u0941\u0928\u0947\u0902",w="1 \u092A\u0930\u093F\u0923\u093E\u092E \u0909\u092A\u0932\u092C\u094D\u0927 \u0939\u0948",y="{0} \u092A\u0930\u093F\u0923\u093E\u092E \u0909\u092A\u0932\u092C\u094D\u0927 \u0939\u0948",z="\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902",Q="\u0938\u0942\u0915\u094D\u0937\u094D\u092E",$="\u092C\u0932 \u0926\u093F\u092F\u093E \u0917\u092F\u093E",EE="\u0938\u0942\u091A\u0940 \u0906\u0907\u091F\u092E {0} / {1}",_E="\u091A\u092F\u0928\u093F\u0924 \u0915\u093F\u092F\u093E \u0917\u092F\u093E",TE="\u091A\u092F\u0928\u093F\u0924 \u0928\u0939\u0940\u0902 \u0915\u093F\u092F\u093E \u0917\u092F\u093E",AE="\u090F\u0915\u093E\u0927\u093F\u0915 \u091A\u092F\u0928 \u092E\u094B\u0921",IE="\u0906\u0907\u091F\u092E \u091A\u092F\u0928.",RE="\u091A\u092F\u0928 \u0915\u0930\u0928\u0947\u092F\u094B\u0917\u094D\u092F \u0906\u0907\u091F\u092E",OE="\u090F\u0915\u0932-\u091A\u092F\u0928\u092F\u094B\u0917\u094D\u092F \u0906\u0907\u091F\u092E \u0936\u093E\u092E\u093F\u0932 \u0939\u094B\u0924\u093E \u0939\u0948",LE="\u0939\u091F\u093E\u0928\u0947\u092F\u094B\u0917\u094D\u092F \u0906\u0907\u091F\u092E \u0936\u093E\u092E\u093F\u0932 \u0939\u094B\u0924\u093E \u0939\u0948",NE="\u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092C\u093E\u0930 \u092C\u0902\u0926 \u0915\u0930\u0947\u0902",CE="\u092C\u0902\u0926 \u0915\u0930\u0928\u0947 \u092F\u094B\u0917\u094D\u092F",SE="\u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092C\u093E\u0930 \u092E\u0947\u0902 \u0924\u094D\u0930\u0941\u091F\u093F",PE="\u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092C\u093E\u0930 \u0915\u0940 \u091A\u0947\u0924\u093E\u0935\u0928\u0940",DE="\u0938\u092B\u0932 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092C\u093E\u0930",BE="\u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u092C\u093E\u0930",UE="\u0920\u0940\u0915",oE="\u092F\u0939 \u092E\u093E\u0928 \u092A\u0939\u0932\u0947 \u0938\u0947 \u0939\u0940 \u091A\u092F\u0928\u093F\u0924 \u0939\u0948.",tE="\u090F\u0915\u093E\u0927\u093F\u0915 \u092E\u093E\u0928 \u0907\u0928\u092A\u0941\u091F",nE="{0} \u0905\u0927\u093F\u0915",cE="\u0935\u093F\u0938\u094D\u0924\u0943\u0924/\u0938\u0902\u0915\u0941\u091A\u093F\u0924",sE="\u0936\u094D\u0930\u0947\u0923\u0940",ME="\u092C\u093E\u092F\u093E\u0902 \u0939\u0948\u0902\u0921\u0932",GE="\u0926\u093E\u092F\u093E\u0902 \u0939\u0948\u0902\u0921\u0932",KE="\u0930\u0947\u091F\u093F\u0902\u0917",HE="\u0930\u0947\u091F\u093F\u0902\u0917 \u0938\u0902\u0915\u0947\u0924\u0915",VE="\u0905\u0938\u094D\u0935\u0940\u0915\u0943\u0924 \u0915\u0930\u0947\u0902",XE="\u0938\u0947\u0917\u092E\u0947\u0902\u091F \u0915\u093F\u090F \u0917\u090F \u092C\u091F\u0928 \u0938\u092E\u0942\u0939",WE="\u0915\u093F\u0938\u0940 \u0906\u0907\u091F\u092E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F SPACE \u092F\u093E ENTER \u0926\u092C\u093E\u090F\u0902",YE="\u0938\u0947\u0917\u092E\u0947\u0902\u091F \u0915\u093F\u090F \u0917\u090F \u092C\u091F\u0928",FE="\u0938\u094D\u0932\u093E\u0907\u0921\u0930 \u0939\u0948\u0902\u0921\u0932",ZE="\u0905\u0927\u093F\u0915",eE="\u0939\u0947\u0921\u0930 \u092A\u0902\u0915\u094D\u0924\u093F",lE="{1} \u092E\u0947\u0902 \u0938\u0947 {0}",aE="\u0938\u092E\u0942\u0939 \u0939\u0947\u0921\u0930 \u092A\u0902\u0915\u094D\u0924\u093F",rE="\u0906\u0907\u091F\u092E \u091A\u092F\u0928",dE="\u0938\u092D\u0940 \u092A\u0902\u0915\u094D\u0924\u093F\u092F\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902",uE="\u0905\u0917\u0932\u093E",hE="\u092A\u093F\u091B\u0932\u093E",pE="\u0913\u0935\u0930\u092B\u093C\u094D\u0932\u094B \u092E\u0947\u0928\u0942",iE="\u0905\u0927\u093F\u0915",mE="\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",xE="{0} \u0936\u0947\u0937 \u0935\u0930\u094D\u0923",JE="{0} \u0938\u0940\u092E\u093E \u0938\u0947 \u0905\u0927\u093F\u0915 \u0935\u0930\u094D\u0923",bE="\u0918\u0902\u091F\u0947",fE="\u092E\u093F\u0928\u091F",gE="\u0938\u0947\u0915\u0902\u0921",vE="AM/PM",jE="\u0920\u0940\u0915",kE="\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",qE="\u0938\u092E\u092F \u0907\u0928\u092A\u0941\u091F",wE="\u0905\u0935\u0927\u093F \u0907\u0928\u092A\u0941\u091F",yE="\u0926\u093F\u0928\u093E\u0902\u0915",zE="\u0938\u092E\u092F",QE="\u0939\u091F\u093E\u0928\u0947 \u092F\u094B\u0917\u094D\u092F \u0939\u0948",$E="\u0915\u094B\u0908 \u091F\u094B\u0915\u0928 \u0928\u0939\u0940\u0902",E_="1 \u091F\u094B\u0915\u0928 \u0936\u093E\u092E\u093F\u0932 \u0915\u0930\u0924\u093E \u0939\u0948",__="{0} \u091F\u094B\u0915\u0928 \u0936\u093E\u092E\u093F\u0932 \u0939\u0948\u0902",T_="\u091F\u094B\u0915\u0928\u093E\u0908\u091C\u093C\u0930",A_="\u0928\u093F\u0915\u093E\u0932\u0947\u0902",I_="\u091F\u094D\u0930\u0940 \u0906\u0907\u091F\u092E",R_="\u0928\u094B\u0921 \u0935\u093F\u0938\u094D\u0924\u0943\u0924 \u0915\u0930\u0947\u0902",O_="\u0928\u094B\u0921 \u0938\u0902\u0915\u0941\u091A\u093F\u0924 \u0915\u0930\u0947\u0902",L_="\u0905\u092E\u093E\u0928\u094D\u092F \u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F\u093F",N_="\u091A\u0947\u0924\u093E\u0935\u0928\u0940 \u091C\u093E\u0930\u0940",C_="\u0938\u0942\u091A\u0928\u093E\u0924\u094D\u092E\u0915 \u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F\u093F",S_="\u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F\u093F \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u092E\u093E\u0928\u094D\u092F \u0939\u0941\u0908",P_="\u0905\u0917\u0932\u093E",D_="\u092A\u093F\u091B\u0932\u093E",B_="\u0938\u092A\u094D\u0924\u093E\u0939 \u0938\u0902\u0916\u094D\u092F\u093E",U_="\u0917\u0948\u0930-\u0915\u093E\u0930\u094D\u092F \u0926\u093F\u0928",o_="\u0906\u091C",t_="\u0915\u092E\u0940",n_="\u0935\u0943\u0927\u094D\u0926\u093F",c_="\u0935\u093F\u092D\u093E\u091C\u0928 \u092C\u091F\u0928",s_="\u0921\u093F\u095E\u0949\u0932\u094D\u091F \u0915\u094D\u0930\u093F\u092F\u093E \u091F\u094D\u0930\u093F\u0917\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u092A\u0947\u0938 \u092F\u093E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 \u0926\u092C\u093E\u090F\u0902 \u0914\u0930 \u0924\u0940\u0930 \u0915\u094D\u0930\u093F\u092F\u093E \u091F\u094D\u0930\u093F\u0917\u0930 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F Alt + \u0928\u0940\u091A\u0947 \u0924\u0940\u0930 \u092F\u093E F4 \u0926\u092C\u093E\u090F\u0902",M_="\u0935\u093E\u092A\u0938 \u091C\u093E\u090F\u0902",G_="\u0905\u0938\u094D\u0935\u0940\u0915\u0943\u0924 \u0915\u0930\u0947\u0902";var K_={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:C,BADGE_DESCRIPTION:S,BREADCRUMB_ITEM_POS:P,BREADCRUMBS_ARIA_LABEL:D,BREADCRUMBS_OVERFLOW_ARIA_LABEL:B,BREADCRUMBS_CANCEL_BUTTON:U,BUSY_INDICATOR_TITLE:o,BUTTON_ARIA_TYPE_ACCEPT:t,BUTTON_ARIA_TYPE_REJECT:n,BUTTON_ARIA_TYPE_EMPHASIZED:c,CAROUSEL_OF_TEXT:s,CAROUSEL_DOT_TEXT:M,CAROUSEL_PREVIOUS_ARROW_TEXT:G,CAROUSEL_NEXT_ARROW_TEXT:K,COLORPALETTE_CONTAINER_LABEL:H,COLORPALETTE_POPOVER_TITLE:V,COLORPALETTE_COLOR_LABEL:X,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:W,COLOR_PALETTE_DIALOG_OK_BUTTON:Y,COLOR_PALETTE_DIALOG_TITLE:F,COLOR_PALETTE_MORE_COLORS_TEXT:Z,COLORPICKER_ALPHA_SLIDER:e,COLORPICKER_HUE_SLIDER:l,COLORPICKER_HEX:a,COLORPICKER_RED:r,COLORPICKER_GREEN:d,COLORPICKER_BLUE:u,COLORPICKER_ALPHA:h,DATEPICKER_OPEN_ICON_TITLE:p,DATEPICKER_DATE_DESCRIPTION:i,DATETIME_DESCRIPTION:m,DATERANGE_DESCRIPTION:x,DELETE:J,FILEUPLOAD_BROWSE:b,FILEUPLOADER_TITLE:f,GROUP_HEADER_TEXT:g,SELECT_ROLE_DESCRIPTION:v,SELECT_OPTIONS:j,INPUT_SUGGESTIONS:k,INPUT_SUGGESTIONS_TITLE:q,INPUT_SUGGESTIONS_ONE_HIT:w,INPUT_SUGGESTIONS_MORE_HITS:y,INPUT_SUGGESTIONS_NO_HIT:z,LINK_SUBTLE:Q,LINK_EMPHASIZED:$,LIST_ITEM_POSITION:EE,LIST_ITEM_SELECTED:_E,LIST_ITEM_NOT_SELECTED:TE,ARIA_LABEL_LIST_ITEM_CHECKBOX:AE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:IE,ARIA_LABEL_LIST_SELECTABLE:RE,ARIA_LABEL_LIST_MULTISELECTABLE:OE,ARIA_LABEL_LIST_DELETABLE:LE,MESSAGE_STRIP_CLOSE_BUTTON:NE,MESSAGE_STRIP_CLOSABLE:CE,MESSAGE_STRIP_ERROR:SE,MESSAGE_STRIP_WARNING:PE,MESSAGE_STRIP_SUCCESS:DE,MESSAGE_STRIP_INFORMATION:BE,MULTICOMBOBOX_DIALOG_OK_BUTTON:UE,VALUE_STATE_ERROR_ALREADY_SELECTED:oE,MULTIINPUT_ROLEDESCRIPTION_TEXT:tE,MULTIINPUT_SHOW_MORE_TOKENS:nE,PANEL_ICON:cE,RANGE_SLIDER_ARIA_DESCRIPTION:sE,RANGE_SLIDER_START_HANDLE_DESCRIPTION:ME,RANGE_SLIDER_END_HANDLE_DESCRIPTION:GE,RATING_INDICATOR_TOOLTIP_TEXT:KE,RATING_INDICATOR_TEXT:HE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:VE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:XE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:WE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:YE,SLIDER_ARIA_DESCRIPTION:FE,LOAD_MORE_TEXT:ZE,TABLE_HEADER_ROW_TEXT:eE,TABLE_ROW_POSITION:lE,TABLE_GROUP_ROW_ARIA_LABEL:aE,ARIA_LABEL_ROW_SELECTION:rE,ARIA_LABEL_SELECT_ALL_CHECKBOX:dE,TABCONTAINER_NEXT_ICON_ACC_NAME:uE,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:hE,TABCONTAINER_OVERFLOW_MENU_TITLE:pE,TABCONTAINER_END_OVERFLOW:iE,TABCONTAINER_POPOVER_CANCEL_BUTTON:mE,TEXTAREA_CHARACTERS_LEFT:xE,TEXTAREA_CHARACTERS_EXCEEDED:JE,TIMEPICKER_HOURS_LABEL:bE,TIMEPICKER_MINUTES_LABEL:fE,TIMEPICKER_SECONDS_LABEL:gE,TIMEPICKER_PERIODS_LABEL:vE,TIMEPICKER_SUBMIT_BUTTON:jE,TIMEPICKER_CANCEL_BUTTON:kE,TIMEPICKER_INPUT_DESCRIPTION:qE,DURATION_INPUT_DESCRIPTION:wE,DATETIME_PICKER_DATE_BUTTON:yE,DATETIME_PICKER_TIME_BUTTON:zE,TOKEN_ARIA_DELETABLE:QE,TOKENIZER_ARIA_CONTAIN_TOKEN:$E,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:E_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:__,TOKENIZER_ARIA_LABEL:T_,TOKENIZER_POPOVER_REMOVE:A_,TREE_ITEM_ARIA_LABEL:I_,TREE_ITEM_EXPAND_NODE:R_,TREE_ITEM_COLLAPSE_NODE:O_,VALUE_STATE_ERROR:L_,VALUE_STATE_WARNING:N_,VALUE_STATE_INFORMATION:C_,VALUE_STATE_SUCCESS:S_,CALENDAR_HEADER_NEXT_BUTTON:P_,CALENDAR_HEADER_PREVIOUS_BUTTON:D_,DAY_PICKER_WEEK_NUMBER_TEXT:B_,DAY_PICKER_NON_WORKING_DAY:U_,DAY_PICKER_TODAY:o_,STEPINPUT_DEC_ICON_TITLE:t_,STEPINPUT_INC_ICON_TITLE:n_,SPLIT_BUTTON_DESCRIPTION:c_,SPLIT_BUTTON_KEYBOARD_HINT:s_,MENU_BACK_BUTTON_ARIA_LABEL:M_,MENU_CLOSE_BUTTON_ARIA_LABEL:G_};export{E as ARIA_LABEL_CARD_CONTENT,LE as ARIA_LABEL_LIST_DELETABLE,AE as ARIA_LABEL_LIST_ITEM_CHECKBOX,IE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,OE as ARIA_LABEL_LIST_MULTISELECTABLE,RE as ARIA_LABEL_LIST_SELECTABLE,rE as ARIA_LABEL_ROW_SELECTION,dE as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,C as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,S as BADGE_DESCRIPTION,D as BREADCRUMBS_ARIA_LABEL,U as BREADCRUMBS_CANCEL_BUTTON,B as BREADCRUMBS_OVERFLOW_ARIA_LABEL,P as BREADCRUMB_ITEM_POS,o as BUSY_INDICATOR_TITLE,t as BUTTON_ARIA_TYPE_ACCEPT,c as BUTTON_ARIA_TYPE_EMPHASIZED,n as BUTTON_ARIA_TYPE_REJECT,P_ as CALENDAR_HEADER_NEXT_BUTTON,D_ as CALENDAR_HEADER_PREVIOUS_BUTTON,M as CAROUSEL_DOT_TEXT,K as CAROUSEL_NEXT_ARROW_TEXT,s as CAROUSEL_OF_TEXT,G as CAROUSEL_PREVIOUS_ARROW_TEXT,X as COLORPALETTE_COLOR_LABEL,H as COLORPALETTE_CONTAINER_LABEL,V as COLORPALETTE_POPOVER_TITLE,h as COLORPICKER_ALPHA,e as COLORPICKER_ALPHA_SLIDER,u as COLORPICKER_BLUE,d as COLORPICKER_GREEN,a as COLORPICKER_HEX,l as COLORPICKER_HUE_SLIDER,r as COLORPICKER_RED,W as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,Y as COLOR_PALETTE_DIALOG_OK_BUTTON,F as COLOR_PALETTE_DIALOG_TITLE,Z as COLOR_PALETTE_MORE_COLORS_TEXT,i as DATEPICKER_DATE_DESCRIPTION,p as DATEPICKER_OPEN_ICON_TITLE,x as DATERANGE_DESCRIPTION,m as DATETIME_DESCRIPTION,yE as DATETIME_PICKER_DATE_BUTTON,zE as DATETIME_PICKER_TIME_BUTTON,U_ as DAY_PICKER_NON_WORKING_DAY,o_ as DAY_PICKER_TODAY,B_ as DAY_PICKER_WEEK_NUMBER_TEXT,J as DELETE,wE as DURATION_INPUT_DESCRIPTION,f as FILEUPLOADER_TITLE,b as FILEUPLOAD_BROWSE,g as GROUP_HEADER_TEXT,k as INPUT_SUGGESTIONS,y as INPUT_SUGGESTIONS_MORE_HITS,z as INPUT_SUGGESTIONS_NO_HIT,w as INPUT_SUGGESTIONS_ONE_HIT,q as INPUT_SUGGESTIONS_TITLE,$ as LINK_EMPHASIZED,Q as LINK_SUBTLE,TE as LIST_ITEM_NOT_SELECTED,EE as LIST_ITEM_POSITION,_E as LIST_ITEM_SELECTED,ZE as LOAD_MORE_TEXT,M_ as MENU_BACK_BUTTON_ARIA_LABEL,G_ as MENU_CLOSE_BUTTON_ARIA_LABEL,CE as MESSAGE_STRIP_CLOSABLE,NE as MESSAGE_STRIP_CLOSE_BUTTON,SE as MESSAGE_STRIP_ERROR,BE as MESSAGE_STRIP_INFORMATION,DE as MESSAGE_STRIP_SUCCESS,PE as MESSAGE_STRIP_WARNING,UE as MULTICOMBOBOX_DIALOG_OK_BUTTON,tE as MULTIINPUT_ROLEDESCRIPTION_TEXT,nE as MULTIINPUT_SHOW_MORE_TOKENS,cE as PANEL_ICON,sE as RANGE_SLIDER_ARIA_DESCRIPTION,GE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,ME as RANGE_SLIDER_START_HANDLE_DESCRIPTION,HE as RATING_INDICATOR_TEXT,KE as RATING_INDICATOR_TOOLTIP_TEXT,VE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,YE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,XE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,j as SELECT_OPTIONS,v as SELECT_ROLE_DESCRIPTION,FE as SLIDER_ARIA_DESCRIPTION,c_ as SPLIT_BUTTON_DESCRIPTION,s_ as SPLIT_BUTTON_KEYBOARD_HINT,t_ as STEPINPUT_DEC_ICON_TITLE,n_ as STEPINPUT_INC_ICON_TITLE,iE as TABCONTAINER_END_OVERFLOW,uE as TABCONTAINER_NEXT_ICON_ACC_NAME,pE as TABCONTAINER_OVERFLOW_MENU_TITLE,mE as TABCONTAINER_POPOVER_CANCEL_BUTTON,hE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,aE as TABLE_GROUP_ROW_ARIA_LABEL,eE as TABLE_HEADER_ROW_TEXT,lE as TABLE_ROW_POSITION,JE as TEXTAREA_CHARACTERS_EXCEEDED,xE as TEXTAREA_CHARACTERS_LEFT,kE as TIMEPICKER_CANCEL_BUTTON,bE as TIMEPICKER_HOURS_LABEL,qE as TIMEPICKER_INPUT_DESCRIPTION,fE as TIMEPICKER_MINUTES_LABEL,vE as TIMEPICKER_PERIODS_LABEL,gE as TIMEPICKER_SECONDS_LABEL,jE as TIMEPICKER_SUBMIT_BUTTON,E_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,__ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,$E as TOKENIZER_ARIA_CONTAIN_TOKEN,T_ as TOKENIZER_ARIA_LABEL,A_ as TOKENIZER_POPOVER_REMOVE,QE as TOKEN_ARIA_DELETABLE,I_ as TREE_ITEM_ARIA_LABEL,O_ as TREE_ITEM_COLLAPSE_NODE,R_ as TREE_ITEM_EXPAND_NODE,L_ as VALUE_STATE_ERROR,oE as VALUE_STATE_ERROR_ALREADY_SELECTED,C_ as VALUE_STATE_INFORMATION,S_ as VALUE_STATE_SUCCESS,N_ as VALUE_STATE_WARNING,K_ as default};