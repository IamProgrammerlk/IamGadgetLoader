//IamGadgetLoader
(function IamGadgetLoader() {
	var IamGadgetLoader = document.getElementsByTagName("ins");
	var IamGadgetLoaderCount;
	for (IamGadgetLoaderCount = 0; IamGadgetLoaderCount < IamGadgetLoader.length; IamGadgetLoaderCount++) {

		switch (IamGadgetLoader[IamGadgetLoaderCount].getAttribute("IamGadgetLoader")) {
			case "IamAdcodeConverter":
				console.log("IamGadgetLoader::IamAdcodeConverter ", IamGadgetLoader.length);
				break;
 			case "IamAdcodeConverter2":
				console.log("IamGadgetLoader::IamAdcodeConverter2 ", IamGadgetLoader.length);
				break;
			case "IamAdcodeConverter3":
				console.log("IamGadgetLoader::IamAdcodeConverter3 ", IamGadgetLoader.length);
				break;
			default: 
				return;
		}
		console.log(IamGadgetLoader.length);
		
	}
	
})();
