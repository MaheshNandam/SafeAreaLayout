# SafeAreaLayout

At Glimpse, On iPhone X, the SafeAreaView provides support for your app from top to bottom, edge to edge alignment in portrait orientation, This helps you to prevent interface elements from getting clipped or covered by positioning them away from the sensor housing, the display's rounded corners, and the Home indicator. 
    
Screenshot:

<img width="386" height='800' alt="screen shot 2018-02-19 at 3 57 07 pm" src="https://user-images.githubusercontent.com/13198616/44924286-72db9f80-ad68-11e8-87ef-483dd9f94521.gif">


Requirements: 

    RN Version : 0.50 (suggested version)
    
    React Navigation :  2.11.0 (suggested version)

How to Use:

      import {SafeAreaView } from ''react-navigation”;
      
      ...
            <SafeAreaView>
                <Text>{"Default Text"}</Text>
            </SafeAreaView>
      ...
      
      const sampleProject = createSwitchNavigator(
	    {
		   homeScreen: {
			title: ’Home Screen’, // defining the screen title as headerTitle using customised component
			headerLeft: <View></View>,
			headerRight: <View></View>
		   } 
	    },
	    navigationOptions:{
		   headerStyle:{
			    backgroundColor: ‘#212121’, // this will handle the cutOff at the top the screen
		   },
		   headerTitleStyle:{
	            fontSize: 14,
                fontWeight: '800',
                textAlign: 'center',
                flex: 1
		   } // to make header centre to the screen
	    }
      )
      
- If you failed to give headerStyle property then your app header will looks incompatible due to the cutoff design at the top of the screen.    

How to execute:

    Step1 - git clone https://github.com/MaheshNandam/SafeAreaLayout.git;

    Step2 - react-native init SafeAreaLayout

    Step3 - react-native run-ios

