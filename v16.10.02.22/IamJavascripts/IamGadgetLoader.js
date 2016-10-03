
//IamGadgetLoader
function IamGadgetLoader() {
	var IamDocumentRoot = document.getElementsByTagName("*");
	var IamNodeState, IamCloneNode, file;
	for (IamNodeState = 0; IamNodeState < IamDocumentRoot.length; IamNodeState++) {
		if (IamDocumentRoot[IamNodeState].getAttribute("IamGadgetLoader")) {
			IamCloneNode = IamDocumentRoot[IamNodeState].cloneNode(false);
			file = IamDocumentRoot[IamNodeState].getAttribute("IamGadgetLoader");
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					IamCloneNode.removeAttribute("IamGadgetLoader");
					IamCloneNode.innerHTML = xhttp.responseText;
					IamDocumentRoot[IamNodeState].parentNode.replaceChild(IamCloneNode, IamDocumentRoot[IamNodeState]);
				}
			}      
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}

	console.log("IamGadgetLoader : Loaded");
	
	
}
IamGadgetLoader();

