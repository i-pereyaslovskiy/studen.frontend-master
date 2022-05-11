let btn_save_geenInfo = document.getElementById('btn_save_geenInfo');
let btn_save_parents = document.getElementById('btn_save_parents');

btn_save_geenInfo.addEventListener('click',()=>{

    axios.post('../url/usl/url', 
        {
            params:{
                surname: document.getElementById('surname').value,
                name: document.getElementById('name').value,
                patronymic: document.getElementById('patronymic').value,
                dob: document.getElementById('dob').value,
                email: document.getElementById('email').value,
                tel: document.getElementById('tel').value,
                workplace: document.getElementById('workplace').value,
                position: document.getElementById('position').value,
                other_info: document.getElementById('other_info').value
            }
        },
        {headers:{"X-CSRFTOKEN":csrfCookie}})
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
    });
});

btn_save_parents.addEventListener('click',()=>{

    axios.post('../url/usl/url', 
        {
            params:{

                fio_father: document.getElementById('fio_father').value,
                tel_father: document.getElementById('tel_father').value,
                fio_mother: document.getElementById('fio_mother').value,
                tel_mother: document.getElementById('tel_mother').value,
            }
        },
        {headers:{"X-CSRFTOKEN":$.cookie("csrftoken")}})
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
    });
});