window.onload = function() {

    let array = [1, 2, [1.1, 1.2, 1.3], 3];

    function generateList() {
        const divParent = document.getElementById('parent');
        const myUl = document.createElement('ul');
        divParent.appendChild(myUl);    
    
        for (let i = 0; i < array.length; i++) {
            const myLi = document.createElement('li'); 
            myUl.appendChild(myLi);                
            if (typeof array[i] === 'number') {            
                myLi.textContent = array[i];            
            } 
            if (Array.isArray(array[i])) {
                const myUlInner = document.createElement('ul');
                myLi.appendChild(myUlInner);            
                for (let j = 0; j < array[i].length; j++) {
                    const myLiInner = document.createElement('li');
                    myUlInner.appendChild(myLiInner);
                    myLiInner.textContent = array[i][j];                
                }
            }
        }
    }
    generateList(array);

};



