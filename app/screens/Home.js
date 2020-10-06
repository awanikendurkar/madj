import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }
    //use of api to fetch covid data
    componentDidMount() {
        fetch("https://api.covid19india.org/data.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result.statewise
              });
            //   console.log(this.state.data);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }


    render(){
        const {isLoaded, data} = this.state;
        if(isLoaded){
            // console.log(data[0].active);

            return(
                <View style = {styles.container}>
                        <Text style = {styles.pagetitle}>Home</Text>
                {/* 4 boxes */}
    
                        <View style = {styles.confirmed}>
                            <Text style = {styles.boxtitle}>Total Confirmed</Text>
                            <Text style = {styles.numbers}>{data[0].confirmed}</Text>
                        </View>
                        <View style = {styles.active}>
                            <Text style = {styles.boxtitle}>Active</Text>
                            <Text style = {styles.numbers}>{data[0].active}</Text>
                        </View>
    
                        <View style = {styles.recovered}>
                            <Text style = {styles.boxtitle}>Recovered</Text>
                            <Text style = {styles.numbers}>{data[0].recovered}</Text>
                        </View>
                        <View style = {styles.deaths}>
                            <Text style = {styles.boxtitle}>Deaths</Text>
                            <Text style = {styles.numbers}>{data[0].deaths}</Text>
                        </View> 
    
                </View>
            )
        }
        else{
            return(

                <Text>Is loading</Text>
            )
        }

    }    
}
const bgcolor = '#fff';
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height : '100%',
        // backgroundColor: bgcolor,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: "space-between" 
    },
    
    pagetitle:{
        // paddingTop: '20%',
        width:'100%',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        // marginTop: '2%',
        alignSelf: "center",
        bottom: 5
        // backgroundColor: 'blue'
        // width:200
    },
    boxtitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    numbers:{
        fontSize: 25
    },  
    active: {
        alignItems: "center",
        justifyContent: "center",
        // padding: '5%',       
        backgroundColor: 'hsla(181, 77%, 31%, 0.7)',
        // flex: .5
        width: '50%',
        height: '25%',
        borderWidth: 8,
        borderColor: bgcolor,
        borderRadius: 20
    },
    confirmed:{
        alignItems: "center",
        justifyContent: "center",
        // padding: '5%',       
        backgroundColor: 'lightgray',
        // flex: .5
        width: '50%',
        height: '25%',
        borderWidth: 8,
        borderColor: bgcolor,
        borderRadius: 20
    },
    recovered: {
        alignItems: "center",
        justifyContent: "center",
        // padding: '5%',       
        backgroundColor: 'hsl(90, 68%, 33%)',
        // flex: .5
        width: '50%',
        height: '25%',
        borderWidth: 8,
        borderColor: bgcolor,
        borderRadius: 20
    },
    deaths:{
        alignItems: "center",
        justifyContent: "center",
        // padding: '5%',       
        backgroundColor: "#E8070A",
        // flex: .5
        width: '50%',
        height: '25%',
        borderWidth: 8,
        borderColor: bgcolor,
        borderRadius: 20
    }
})