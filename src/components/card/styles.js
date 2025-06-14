import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    marginTop:0,


    shadowColor: '#000111',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  evolution: {
    fontSize: 8,
    color: 'gray',
    fontStyle: 'italic',
  },
  hp: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 180,
    
    borderRadius: 8,
    marginVertical: 8,
  },
  image2: {
    width: '10%',
    height: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  image3: {
    //width: '10%',
    height: 10,
    //borderRadius: 8,
    //marginVertical: 8,
    alignContent:'right',
  },
  info: {
    fontSize: 8,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 8,
    
  },
  abilityBox: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 3,
    marginTop: 'auto',
    marginBottom:'auto',
  },
  abilityTitle: {
    color: 'red',
    fontWeight: 'bold',
  },
  abilityText: {
    fontSize: 10,
    color: '#333',
  },
  attackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  attackName: {
    fontSize: 14,
    marginLeft:'20%',
  },
  attackPower: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    marginTop: 8,
  },
  footerText: {
    fontSize: 10,
    color: 'gray',
  },
  description: {
    fontSize: 8,
    fontStyle: 'italic',
    color: 'gray',
    marginTop: 8,
    textAlign:'right',
  },
  abilityDescription: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'black',
    marginTop: 8,
    textAlign:'left',
  },
  credit: {
    fontSize: 6,
    color: 'gray',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: -5,
  },
});