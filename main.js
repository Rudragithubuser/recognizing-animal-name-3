function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FEuf8cCsh/model.json', modelReady);

}
function modelReady(){
    classifier.clasify(gotRsults);
}


function gotRsults(error, results) {
    if (error) {
        console.error(error);

    } else{
        console.log(results);
        random_number_r = Math.floor(Math.ransdom() * 255) + 1;
        random_number_g = Math.floor(Math.ransdom() * 255) + 1;
        random_number_b = Math.floor(Math.ransdom() * 255) + 1;

        document.getElementById("result_lable").innerHTML = 'I can hear - '+
        results[0].lable;
        document.getElementById("results_lable").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_lable").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("results_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";


        Img = document.getElementById('cat3');
        img1 = document.getElementById('dog');

        if (results[0].label == "barking") {
            img.src = 'dog.gif'
            img.src = 'cat3.jpeg'

        } else if (reslults[0].label == "meowing") {
            img.src ='dpg.jpeg';

            img.src = 'cat3.gif';
            


        }else{
            img.src = 'pngtree-ear-and-hearing-health-examination-png-image_2835913-removebg-preview.png';
            
        }

    }
}