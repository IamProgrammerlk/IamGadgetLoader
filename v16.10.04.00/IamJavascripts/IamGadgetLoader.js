window.IamGadgetLoader|| document.write('

//IamGadgetLoader
(function IamGadgetLoader() {

	IamGetHttpRequestUrl = function(IamGadgetLoaderElement) {
		var IamGetHttpRequestUrl = location.protocol + "//iamprogrammerlk.github.io/" + IamGadgetLoaderElement.getAttribute("IamGadgetLoader");
		if (IamGadgetLoaderElement.getAttribute("IamGadgetVersion")== null){
			IamGetHttpRequestUrl += "/index.html";
		}else{
			IamGetHttpRequestUrl += "/" + IamGadgetLoaderElement.getAttribute("IamGadgetVersion") + "/index.html"
		}
		return  IamGetHttpRequestUrl;
	};
	
	var IamAllInsElements = document.getElementsByTagName("ins");
	var IamAllInsElementsCount;
	var IamGadgetLoaderElements = [];
	for (IamAllInsElementsCount = 0; IamAllInsElementsCount < IamAllInsElements.length; IamAllInsElementsCount++) {
		if (IamAllInsElements[IamAllInsElementsCount].getAttribute("IamGadgetLoader")){
		
			console.log(IamGetHttpRequestUrl(IamAllInsElements[IamAllInsElementsCount]));
			
			//IamGadgetLoaderElements.push(IamAllInsElements[IamAllInsElementsCount]);
			
		} else {
			console.error("IamGadgetLoader :: I can't find <ins IamGadgetLoader='IamToolName'></ins> elements in the document");
			break;
		}
	}
	
	return;
})();
');