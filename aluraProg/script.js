function colorSite(){
    document.body.classList.toggle('dark-page')
}

const colocar = {
    add(){ 
        document.querySelector('.page-land').classList.toggle('active')
    },
    close(){ 
        document.querySelector('.page-land').classList.remove('active')
    }
}
