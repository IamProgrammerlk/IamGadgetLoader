
//IamGadgetLoader
function IamGadgetLoader() {
	var IamDocumentRoot = document.getElementsByTagName("div");
	var IamNodeState;
	var IamXMLHttpRequestPath = "https://iamprogrammerlk.github.io";
	
	for (IamNodeState = 0; IamNodeState < IamDocumentRoot.length; IamNodeState++) {
		if (IamDocumentRoot[IamNodeState].getAttribute("IamGadgetLoader")) {
			var IamParentNode = IamDocumentRoot[IamNodeState];
			var IamCloneNode = IamDocumentRoot[IamNodeState].cloneNode(false);
			
			switch (IamParentNode.getAttribute("IamGadgetLoader")) {
				case "IamAdcodeConverter":
					IamXMLHttpRequestPath = IamXMLHttpRequestPath + "/IamAdcodeConverter/index.html";
					break;
/* 				case "":
					IamXMLHttpRequestPath = IamXMLHttpRequestPath + "";
					break; */
				default: 
					IamXMLHttpRequestPath = IamXMLHttpRequestPath + "/Index.html";
			}
			var IamXMLHttpRequest = new XMLHttpRequest();
			IamXMLHttpRequest.onreadystatechange = function() {
				if (IamXMLHttpRequest.readyState == 4 && IamXMLHttpRequest.status == 200) {
						
					IamCloneNode.removeAttribute("IamGadgetLoader");
					IamCloneNode.innerHTML = IamXMLHttpRequest.responseText;
					IamParentNode.parentNode.replaceChild(IamCloneNode, IamParentNode);
				}
			}      
			IamXMLHttpRequest.open("GET", IamXMLHttpRequestPath, true);
			IamXMLHttpRequest.send();
		}
	}

	console.log("IamGadgetLoader::Loaded");
	
	
}
IamGadgetLoader();

