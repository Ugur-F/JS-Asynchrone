//Script
document.getElementById('Btn').addEventListener('click', function() {
    fetch('file.json') 
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('crewList');
            list.innerHTML = '';
            data.members.forEach(member => {
                const listItem = document.createElement('li');
                listItem.textContent = `${member.role} : ${member.name} - ${member.powers}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});


