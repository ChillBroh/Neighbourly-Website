jQuery(document).ready(function($){var $tabsWrapper=$('#publishpress-permissions-teaser-tabs');$tabsWrapper.find('li').click(function(e){e.preventDefault();$tabsWrapper.children('li').filter('.nav-tab-active').removeClass('nav-tab-active');$(this).addClass('nav-tab-active');var panel=$(this).find('a').first().attr('href');$('section[id^="ppp-"]').hide();$(panel).show();var current_tab=$(this).find('a').attr('href').replace('#','');$('#current_tab').val(current_tab);});$('.ppp-expand-code').bind('click',function(e){e.preventDefault();var codeArea=$(this).closest('.ppp-code-sample').find('textarea');if($(this).attr('data-expand')==='closed'){codeArea.css('height',codeArea[0].scrollHeight);$(this).attr('data-expand','opened');$(this).find('.ppp-expand-msg').hide();$(this).find('.ppp-collapse-msg').show();}else{codeArea.css('height',200);$(this).attr('data-expand','closed');$(this).find('.ppp-collapse-msg').hide();$(this).find('.ppp-expand-msg').show();}});$('.ppp-copy-code').bind('click',function(e){e.preventDefault();var codeArea=$(this).closest('.ppp-code-sample').find('textarea');codeArea.select();document.execCommand('copy');if($(this).attr('data-copy')==='uncopied'){$(this).find('.ppp-uncopied-msg').hide();$(this).find('.ppp-copied-msg').show();}else{$(this).attr('data-expand','closed');$(this).find('.ppp-copied-msg').hide();$(this).find('.ppp-uncopied-msg').show();}});$('.permissions_select_posts').select2({placeholder:presspermitTeaser.strings.select_a_page,allowClear:true,ajax:{url:presspermitTeaser.url,dataType:'json',method:'get',delay:250,data:function(params){return{search:params.term,action:'pp_search_posts',nonce:presspermitTeaser.nonce}},processResults:function(data){var options=[];if(data){$.each(data,function(index,item){options.push({id:item.ID,text:item.post_title});});return{results:options};}},}});$('.permissions_select_terms').select2({placeholder:presspermitTeaser.strings.select_terms,ajax:{url:presspermitTeaser.url,dataType:'json',method:'get',delay:250,data:function(params){return{search:params.term,action:'pp_search_terms',taxonomy:$('#teaser_hide_links_taxonomy').val(),nonce:presspermitTeaser.nonce}},processResults:function(data){var options=[];if(data){$.each(data,function(index,item){options.push({id:item.term_id,text:item.name});});return{results:options};}},}});$('div.teaser-coverage-post select').on('change',function(){$(this).siblings('span.teaser-num-chars').toggle($(this).val()=='x_chars');});$('#ppp-tab-redirect select.teaser-redirect-mode').on('change',function(){$(this).parent('td').siblings('td').find('div.pp-select-dynamic-wrapper').toggle($(this).val()=='(select)');});});