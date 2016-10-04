

//IamGadgetLoader
(function IamGadgetLoader() {

	this.IamGetHttpRequestUrl = function(IamGadgetLoaderElement) {
		var IamHttpRequestUrl = location.protocol + "//iamprogrammerlk.github.io/" + IamGadgetLoaderElement.getAttribute("IamGadgetLoader");
		if (IamGadgetLoaderElement.getAttribute("IamGadgetVersion")== null){
			IamHttpRequestUrl += "/index.html";
		}else{
			IamHttpRequestUrl += "/" + IamGadgetLoaderElement.getAttribute("IamGadgetVersion") + "/index.html"
		}
		return  IamHttpRequestUrl;
	};
	
	var IamAllInsElements = document.getElementsByTagName("ins");
	var IamAllInsElementsCount;
	var IamGadgetLoaderElements = [];
	for (IamAllInsElementsCount = 0; IamAllInsElementsCount < IamAllInsElements.length; IamAllInsElementsCount++) {
		if (IamAllInsElements[IamAllInsElementsCount].getAttribute("IamGadgetLoader")){
		
			console.log(this.IamGetHttpRequestUrl(IamAllInsElements[IamAllInsElementsCount]));
			
			//IamGadgetLoaderElements.push(IamAllInsElements[IamAllInsElementsCount]);
			
		} else {
			console.error("IamGadgetLoader :: I can't find <ins IamGadgetLoader='IamToolName'></ins> elements in the document");
			break;
		}
	}
	
	return;
})();
