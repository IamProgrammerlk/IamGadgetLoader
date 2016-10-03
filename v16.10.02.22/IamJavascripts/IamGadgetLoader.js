
//IamGadgetLoader
function IamGadgetLoader() {
	var IamDocumentRoot = document.getElementsByTagName("*");
	var IamNodeState;
	for (IamNodeState = 0; IamNodeState < IamDocumentRoot.length; IamNodeState++) {
		if (IamDocumentRoot[IamNodeState].getAttribute("IamGadgetLoader")) {
			var IamCloneNode = IamDocumentRoot[IamNodeState].cloneNode(false);
			var IamXMLHttpRequestPath = "https://iamprogrammerlk.github.io";
			switch (IamDocumentRoot[IamNodeState].getAttribute("IamGadgetLoader")) {
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
					IamDocumentRoot[IamNodeState].parentNode.replaceChild(IamCloneNode, IamDocumentRoot[IamNodeState]);
				}
			}      
			IamXMLHttpRequest.open("GET", IamXMLHttpRequestPath, true);
			IamXMLHttpRequest.send();
			return;
		}
	}

	console.log("IamGadgetLoader::Loaded");
	
	
}
IamGadgetLoader();

