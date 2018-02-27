var rootNode = document.getElementById('root');
// Your code goes here
function createTree(dom) {
    var ul = document.createElement('ul');
    for (var i = 0; i < dom.length; i++) {
        var li = document.createElement('li');
        var ii = document.createElement('i');
        var p = document.createElement('p');
        var span = document.createElement('span');
        if (dom[i].folder) {
            ul.appendChild(li);
            li.setAttribute('class','folder');
            li.appendChild(p);
            p.appendChild(ii);
            p.setAttribute('class','folderName');
            p.appendChild(document.createTextNode(dom[i].title));
            ii.setAttribute('class','material-icons');
            ii.appendChild(document.createTextNode('folder'));

            if (dom[i].children) {
                li.appendChild(createTree(dom[i].children));
            } else {
                li.appendChild(span);
                span.appendChild(document.createTextNode('Folder is empty'));
            }

        } else {
            ul.appendChild(li);
            li.setAttribute('class','file');
            li.appendChild(p);
            p.appendChild(ii);
            p.appendChild(document.createTextNode(dom[i].title));
            ii.setAttribute('class','material-icons');
            ii.appendChild(document.createTextNode('insert_drive_file'));
        }
    }
    return ul;
}
rootNode.appendChild(createTree(structure));
    var folderName = document.querySelectorAll('.folderName');
    if (folderName) {
        folderName.forEach(function(detail) {
        detail.addEventListener('click', function(detail) {
        detail.target.parentNode.classList.toggle('open');
        var icon = detail.target.querySelector('.material-icons');
            icon.textContent = icon.textContent === 'folder_open' ? icon.textContent = 'folder' : icon.textContent = 'folder_open';
        })
    })
}
