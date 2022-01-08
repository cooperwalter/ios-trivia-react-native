import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuestionScreen from "./features/questions/QuestionScreen";

const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Question" component={QuestionScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
