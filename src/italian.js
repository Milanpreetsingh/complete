import React,{useState} from 'react';
import pic1 from './pic_italian1.png';
import pic2 from './pic_italian2.png';
import pic3 from './pic_italian3.png';
import './App.css';
import Alert from '@material-ui/lab/Alert';

function Italian(){
    const[dish,setdish] = useState(0);
    
    const alert = (i)=>{
        if(dish === 0){
            setdish(i)
        }
        else{
            setdish(0)
        }
    }

    const Alerts = (i)=>{
        if(dish == 1){
            return(<Alert severity="success"><p>Nothing like a fresh tomato salad in summers!
                                                A great antipasto bite to start your meal with. This 
                                                combination of juicy tomatoes and mozzarella cheese salad
                                                topped with freshly made pesto sauce is a distinct yet simple one.
                                                It offers a twist to the classic caprese salad. </p></Alert>) 
        }
        else if(dish == 2){
            return(<Alert severity="success"><p>Panzenella is a Tuscan bread salad, ideal for summer.
                                                It does not follow a particular recipe, but the two ingredients
                                                that do not change are tomatoes and bread. This salad is great
                                                with a chilled glass of Prosecco and lots of sunshine!</p></Alert>) 
        }
        else if(dish == 3){
            return(<Alert severity="success"><p>An antipasto dish, bruschetta has grilled bread topped with 
                                                veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic. The classic Italian starter!</p></Alert>) 
        }
        else{
            return(<div></div>) 
        }
    }

    return(
        <div>
            <div className="Card1" onClick = {()=>alert(1)}>
            <img src={pic1} alt="Avatar" width="100%" height = "300px"></img>
                <div class="Container">
                    <h4><b>Caprese Salad with Pesto Sauce</b></h4>
                </div>
            </div>
            
            <div className="Card2" onClick = {()=>alert(2)}>
            <img src={pic2} alt="Avatar" width="100%" height = "300px"></img>
                <div class="Container">
                    <h4><b>Panzenella</b></h4>
                </div>
            </div>

            <div className="Card3" onClick = {()=>alert(3)}>
            <img src={pic3} alt="Avatar" width="100%" height = "300px"></img>
                <div class="Container">
                    <h4><b>Bruschetta</b></h4>
                </div>
            </div>

        <div>{Alerts()}</div>

        </div>
    )
}

export default Italian;