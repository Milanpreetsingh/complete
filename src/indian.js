import React,{useState} from 'react';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import './App.css';
import Alert from '@material-ui/lab/Alert';


function Indian(){

    const[dish,setdish] = useState(0);
    
    const alert = (i)=>{
        if(dish === 0){
            setdish(i)
        }
        else{
            setdish(0)
        }
    }

    const Alerts = ()=>{
        if(dish === 1){
            return(<Alert severity="success"><p>A classic and easy chole chickpea curry, is a favorite in 
                                                Northern India and has become a worldwide sensation. It's 
                                                perfect for a crowd, especially if you serve it hot along with 
                                                fried Indian leavened bread like poori or bhatura.The ingredient list 
                                                looks more intimidating than the recipe is in reality. Once you have the chickpeas,
                                                onions, and tomatoes, along with garlic and ginger pastes, all you need are those common Indian spices that make this cuisine unique.</p></Alert>)   
        }
        else if(dish === 2){
            return(<Alert severity="success"><p>The most popular paneer recipe at Indian restaurants is, by far,
                                                palak paneer. It is a mildly flavored dish that is super healthy,
                                                as it is nothing more than spinach and cottage cheese (the paneer),
                                                along with the typical Indian spices.Thanks to the large portions of spinach 
                                                and fenugreek leaves included in the recipe, this dish takes on a deep green hue.
                                                The cubed paneer are pan-fried first, contributing a nice texture to the dish.
                                                Palak paneer gets even better when served with your favorite flatbread.</p></Alert>)
        }
        else if(dish === 3){
            return(<Alert severity="success"><p>vegetable "meatballs" in a thick sauce) is 
                                                the vegetarian alternative to meatballs. The koftas 
                                                are made with a mix of potatoes, carrots, beans, peas, 
                                                and sweet corn, which are cooked and mashed before mixing
                                                with spices and paneer, that essential blocked "cheese" that 
                                                is similar to tofu in texture and a great addition to any vegetarian meal. 
                                                It's rather easy to find if you don't want to make it, especially if you shop at a natural foods market.</p></Alert>)
        }
        else{
            return(<div></div>)
        }
    }

    return(
        <div>
            <div className="Card1"  onClick = {()=>alert(1)}>
            <img src={pic1} alt="Avatar" width="100%" height = "300px"></img>
                <div class="Container">
                    <h4><b>Chole(Chickpea Curry)</b></h4>
                </div>
            </div>
            
            <div className="Card2"  onClick = {()=>alert(2)}>
            <img src={pic2} alt="Avatar" width="100%" height = "300px"></img>
                <div class="Container">
                    <h4><b>Palak Paneer</b></h4>
                </div>
            </div>

            <div className="Card3"  onClick = {()=>alert(3)}>
            <img src={pic3} alt="Avatar" width="100%" height = "300px"></img>
                <div class="Container">
                    <h4><b>Malai Kofta</b></h4>
                </div>
            </div>
          <div>{Alerts()}</div>

        </div>
    )

}

export default Indian;