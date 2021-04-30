import React, {useState, useEffect, Component} from 'react';
import { 
    AppRegistry,
    Text, 
    View, 
    TouchableHighlight,
    Dimensions,
    StyleSheet, 
    ScrollView, 
    Image,
    FlatList,
    TextInput,
    SafeAreaView,
    Alert,
    Button,
    Platform,
} from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const { width } = Dimensions.get('window');
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;



//export default class brandapp extends Component {

//start of Search Code

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    //const [showing, newShowing] = useState(homePageDisplay);

    useEffect(() => {
      fetch('https://my-json-server.typicode.com/futureof1995/test/posts')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
  
    const ItemView = ({item}) => {
      return (
        // Flat List Item
        //<TouchableHighlight onPress={this.handleInfoPagePress}>
        <Text
          style={styles.itemStyle}
          onPress={() => getItem(item)}>
          {'  '}   
        {item.title.toUpperCase()}
        </Text>
        //</TouchableHighlight>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        <View
          style={{
            height: 0.5,
            width: width - 20,
            backgroundColor: '#C8C8C8',
            marginLeft:10,
          }}
        />
      );
    };
  
    const getItem = (item) => {
      // Function for click on an item
      
      Alert.alert(
        item.title +" " + item.Discount,
        'Coupon Code: ' + item.code
        
    );
    };
  //end of search code


	
        return (
    
    <View style={styles.container}>
                {/*Home page screen layout here*/}
                <View>
                    <View>
                        <Text style={styles.title}>
                        Brooklyn Books
                        </Text>

      <ScrollView 
        //ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
 
        <View style={styles.searchScroll}>
        <Text style={styles.paragraph}>
        Coupon Search
        </Text> 

    <SafeAreaView style={{flex: 1}}>
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
        
        </View>
    
        
        <View style={styles.newfeatureScroll}>
        <ScrollView>
        <View style={{margin:20}}>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin:0}}>
        <Text style={styles.paragraph}>
        Featured
        </Text>
         </View>

        <View style={{borderBottomColor:'black', borderBottomWidth: 1}}>
        <View style={{marginTop:15, marginBottom:10, flexDirection: 'row', width: 400}}>
        
        <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/71-%2B%2BhbbERL._AC_SL1000_.jpg'}}
        style={{height: 200, width: 120 }}
        />

        <View style={{marginLeft:15, width: 180}}>
        <Text>Title: Harry Potter and Sorcerer's Stone Book</Text> 
        <Text>ISBN: 98097867673</Text> 
        <Text>Author: JK Rowling</Text> 
        <Text>Price: $12.99</Text> 
        <View style={{height:40,
           width:100, borderWidth:1, borderRadius:10, backgroundColor:'skyblue', marginTop:10}}>
        <Button
        title="Buy"
        onPress={() => Alert.alert('Please Check Your Local Store')}
         />
       </View>
        
        </View>  
           

        </View>
        <View style={{margin:5, marginBottom:15}}>
        <Text style={{fontWeight:"bold"}}>Description</Text>
        <Text>Featuring vivid descriptions and an imaginative story line, it followed the adventures of the unlikely hero Harry Potter,
        a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry. 
        The book received numerous awards, including the British Book Award.</Text>
          </View>
          </View>

          <View style={{borderBottomColor:'black', borderBottomWidth: 1}}>
        <View style={{marginTop:15, marginBottom:10, flexDirection: 'row', width: 400}}>
        
        <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/71-%2B%2BhbbERL._AC_SL1000_.jpg'}}
        style={{height: 200, width: 120 }}
        />

        <View style={{marginLeft:15, width: 180}}>
        <Text>Title: Harry Potter and Sorcerer's Stone Book</Text> 
        <Text>ISBN: 98097867673</Text> 
        <Text>Author: JK Rowling</Text> 
        <Text>Price: $12.99</Text> 
        <View style={{height:40,
           width:100, borderWidth:1, borderRadius:10, backgroundColor:'skyblue', marginTop:10}}>
        <Button
        title="Buy"
        onPress={() => Alert.alert('Please Check Your Local Store')}
         />
       </View>
        
        </View>  
           

        </View>
        <View style={{margin:5, marginBottom:15}}>
        <Text style={{fontWeight:"bold"}}>Description</Text>
        <Text>Featuring vivid descriptions and an imaginative story line, it followed the adventures of the unlikely hero Harry Potter,
        a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry. 
        The book received numerous awards, including the British Book Award.</Text>
          </View>
          </View>

        <View style={{borderBottomColor:'black', borderBottomWidth: 1}}>
        <View style={{marginTop:15, marginBottom:10, flexDirection: 'row', width: 400}}>
        
        <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/71-%2B%2BhbbERL._AC_SL1000_.jpg'}}
        style={{height: 200, width: 120 }}
        />

        <View style={{marginLeft:15, width: 180}}>
        <Text>Title: Harry Potter and Sorcerer's Stone Book</Text> 
        <Text>ISBN: 98097867673</Text> 
        <Text>Author: JK Rowling</Text> 
        <Text>Price: $12.99</Text> 
        <View style={{height:40,
           width:100, borderWidth:1, borderRadius:10, backgroundColor:'skyblue', marginTop:10}}>
        <Button
        title="Buy"
        onPress={() => Alert.alert('Please Check Your Local Store')}
         />
       </View>
        
        </View>  
           

        </View>
        <View style={{margin:5, marginBottom:15}}>
        <Text style={{fontWeight:"bold"}}>Description</Text>
        <Text>Featuring vivid descriptions and an imaginative story line, it followed the adventures of the unlikely hero Harry Potter,
        a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry. 
        The book received numerous awards, including the British Book Award.</Text>
          </View>
          </View>




        </View>
        </ScrollView>
        </View> 
        




       {/*Newsletter */}
       
        <View style={styles.toptenScroll}>
        <ScrollView>
        <View>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin:0}}>
        <Text style={styles.paragraph}>
        Newsletter
        </Text>
         </View>
        <View style={{borderBottomColor:'black', borderBottomWidth: 1}}>
        <View style={{marginTop:15, marginBottom:10, width: 400}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, margin: 5}}>New Location Opening!</Text>
        <Image source={{uri:'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2019/03/philly-book-stores-shakespeare.jpg'}}
        style={{height: 200, width: deviceWidth  }}
        />

        <View style={{margin: 10, width: 350}}>
        <Text>New location opening in Downtown Manhattan. The grand opening is schedule for April 30th, 2021 {"\n"} </Text>
        <Text>123rd Street West</Text>
        <Text>New York , NY</Text> 
        <Text>10002</Text> 
        
        </View>  
           

        </View>
        
          </View>

          <View style={{borderBottomColor:'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, margin: 5}}>Events</Text>
        <View style={{margin:10, flexDirection: 'row', width: 400}}>
        
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6MgQKngABl6C91n8fxOt3sDm1QEWofLPJCg&usqp=CAU'}}
        style={{height: 200, width: 150 }}
        />

        <View style={{marginLeft:15, width: 180}}>
        <Text>288th Book Drive</Text> 
        <Text>Where:</Text> 
        <Text>288th Street East, New York, NY 10002</Text> 
        
        
        
        </View>  
           

        </View>
        <View style={{margin:10, marginBottom:15}}>
        <Text style={{fontWeight:"bold"}}>Details</Text>
        <Text>Book drive to benefit PS201, 
        Some of the most impactful fundraisers are campaigns created by community members like you.
        That’s because when individuals share a fundraiser with their network,
        they reach more people than the organization can alone</Text>
    
          </View>
          </View>

          <View style={{borderBottomColor:'black', borderBottomWidth: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, margin: 5}}>New Releases</Text>
        <View style={{margin:10, flexDirection: 'row', width: 400}}>
        
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/e/eb/The_goldfinch_by_donna_tart.png'}}
        style={{height: 200, width: 150 }}
        />

        <View style={{marginLeft:15, width: 180}}>
        <Text>Title: 288th Book Drive</Text> 
        <Text>Author: Donna Tart</Text> 
        <Text style={{fontWeight:'bold'}}>Avaliable:</Text>
           <Text>All Locations</Text> 
        
        
        
        </View>  
           

        </View>
        <View style={{margin:10, marginBottom:15}}>
        <Text style={{fontWeight:"bold"}}>Details</Text>
        <Text>
        Theodore Decker was 13 years old when his mother
        was killed in a bombing at the Metropolitan Museum of Art in New York.
        The tragedy changes the course of his life, sending him on a stirring
        odyssey of grief and guilt, reinvention and redemption, and even love.
        </Text>
    
          </View>
          </View>




        </View>
</ScrollView>
</View>

        <View style={styles.toptenScroll}>
        <Text style={styles.paragraph}>
        Locations
        </Text>
          <MapView
         style={{width: 355, height: 550, }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation

         initialRegion={{
         latitude: 40.730610 ,
         longitude: -73.935242,
         latitudeDelta: 0.5,
         longitudeDelta: 0.5}}> 

      <Marker
            coordinate={{
            latitude:40.723005,
            longitude: -73.994829}}
            title={"123rd Street"}
            description={"111-222-3333" + "\n" + "M-F: 9pm - 7pm" + "\n" + "Sat & Sun: Closed"}
            pinColor="green"
         ></Marker>
         

         <Marker
            coordinate={{
            latitude:40.767258,
            longitude: -73.990557}}
            title={"288th Street"}
            description={"888-888-8888" + "\n" + "M-F: 9pm - 7pm" + "\n" + "Sat & Sun: Closed"}
            pinColor="blue"
         ></Marker>

        <Marker
            coordinate={{
            latitude:40.713230,
            longitude:  -73.961283}}
            title={"222nd Ave"}
            description={"999-999-9889" + "\n" + "M-F: 9pm - 7pm" + "\n" + "Sat & Sun: Closed"}
            pinColor="orange"
         ></Marker>

        <Marker
            coordinate={{
            latitude:40.762500,
            longitude: -73.932068}}
            title={"31-24th Street"}
            description={"555-888-7777" + "\n" + "M-F: 9pm - 7pm" + "\n" + "Sat & Sun: Closed"}
            pinColor="purple"
         ></Marker>



         </MapView>
              <Text>Tap Pins for location Details</Text>
              <Text>Swipe here to go back</Text>
        </View>



      </ScrollView>
    
                    </View>
                </View>    
            </View>
             
      );
   }


const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor:"cornsilk",
    },
    topNav:{
        height: deviceHeight/8,
        width: deviceWidth,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    contentContainer: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    homeContainer: {
        height: deviceHeight,
        width: deviceWidth,
      
    },
    infoContainer: {
        height: deviceHeight,
        width: deviceWidth,
   
      
    },
    searchContainer: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
  
    },
    title: {
        fontSize: deviceHeight/18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginTop:30,
        
    },
    paragraph: {
        fontSize: deviceHeight/20,
        textAlign: 'left',
        color: 'black',
        margin: 10,
        
    },
    navbarContainer: {
        height:deviceHeight/30,
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    botnavButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'black',
    },
    searchScroll: {
        marginTop:10,
        backgroundColor: 'white',
        width: width - 20,
        margin:10 ,
        height: 5*(deviceHeight/6),
        borderRadius: 10,
        borderColor:'white',
        borderWidth: 1,
        alignItems: 'center',
      
        
    //paddingHorizontal : 30
    },
    newfeatureScroll: {
        marginTop:10,
        backgroundColor: 'white',
        width: width - 20,
        margin:10 ,
        height: 5*(deviceHeight/6),
        borderRadius: 10,
        borderColor:'white',
        borderWidth: 1,
       
        
    //paddingHorizontal : 30
    },
    toptenScroll: {
        marginTop:10,
        backgroundColor: 'white',
        width: width - 20,
        margin:10 ,
        height: 5*(deviceHeight/6),
        borderRadius: 10,
        borderColor:'white',
        borderWidth: 1,
        
    //paddingHorizontal : 30
    },
    itemStyle: {
        padding: 20,
      },
      textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft:20,
        margin: 10,
        borderColor: 'black',
        backgroundColor: '#FFFFFF',
      },
      
    
});
export default App;