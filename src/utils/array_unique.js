/*renvoi un tableau avec les éléments distincts*/
export function array_unique(vbPropose) {
	let temp=[];
	for(var i=0;i<vbPropose.length;i++) {
		var trouve=false;
		for(var j=0;j<temp.length;j++) {
			if (vbPropose[i]===temp[j]) trouve=true;
		}
		if (!trouve) {
			temp.push(vbPropose[i]);
		}
	}
	return temp;
}	
