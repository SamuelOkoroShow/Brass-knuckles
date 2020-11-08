import React from 'react';
import {View, TouchableOpacity, Dimensions, Text, Animated} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

const BUTTON_SIZE = windowWidth/6

const menu = (props) => {
	const animatedVal = React.useRef(new Animated.Value(0)).current;
	const [fold, setfold] = React.useState(0)
	var animatedValue = animatedVal;
	const animation = (toValue) => Animated.timing(animatedVal, {
			toValue: toValue,
			duration: 200,
			useNativeDriver: false
		})
	function DaysGone(){
		if(fold == 0){
		return (<View />)
	}else{
		return (<View style={{justifyContent:'space-between', flexDirection:'row', flex:1}}>
			<Text style={{fontSize:12}}>Player Info...</Text>
					<View style={{flexDirection:'row'}}>
				<View style={{justifyContent:'flex-end'}}>
			<Text style={{fontSize:9, textAlign:'center'}}>{props.game.day}</Text>
			<Text style={{fontSize:9.5, textAlign:'center'}}>Days have passed</Text>
				</View>
				<TouchableOpacity style={{borderTopRightRadius:BUTTON_SIZE/2, justifyContent:'center', alignItems:'center', marginLeft:5, borderBottomRightRadius:BUTTON_SIZE/2, width:BUTTON_SIZE/1.6}}>
				 <AntDesign name={'fastforward'} size={15} color="#333" />
				</TouchableOpacity>
					</View>
			</View>)
		}
	}
	const onPress = () => {
		console.log(fold === 1? 0: 1)
		animation(fold === 1 ? 0 : 1).start()
		setfold(fold === 1? 0: 1);
		
	}

  return (
    <View style = {{position:'absolute', bottom:70, alignSelf:'center', justifyContent:'center', alignItems:'center'}}>
    <Animated.View style = {{position:'absolute',shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 3, width:animatedVal.interpolate({
				inputRange:[0,0.5,1],
				outputRange:[1,BUTTON_SIZE*2.5, BUTTON_SIZE*5]
			}), backgroundColor:'#c0a47c', height:BUTTON_SIZE-10, borderRadius:BUTTON_SIZE/2, alignSelf:'center'}}>
			<DaysGone />
	</Animated.View>
    <TouchableOpacity onPress={onPress} style={{shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 8, width:BUTTON_SIZE, alignSelf:'center', backgroundColor:"#c0a47c", justifyContent:'center', alignItems:'center', height:BUTTON_SIZE, borderRadius:BUTTON_SIZE/2}}>
    <AntDesign name={fold === 1?"close":'ellipsis1'} size={25} color="#fff" />
    </TouchableOpacity>

    </View>
  )
}

export default menu;