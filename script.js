const ul = document.querySelector('ul'),
 input = ul.querySelector('input');

function createTag() {
    tags.forEach(tag =>{
        let liTag = <li>${tag} <i class="uit uit multiply"></i> </li>;
        ul.insertAdjacentElement('afterbegin',liTag);
    })
}







function addTag(e){
    if(e.key == 'Enter'){
        let tag = e.target.value.replace(/\s+/g, '   ');
        if(tag.length > 1 && !tags.includes(tag)){
            tag.split(',').forEach(tag => tags.push(tag));
            createTag();
        }
    }
}




input.addEventListener('keyup', addTag);