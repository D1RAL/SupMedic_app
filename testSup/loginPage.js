import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  useWindowDimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';

function useStyles() {
  const {width, height} = useWindowDimensions
}

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#08BDBA" }}>
      <ImageBackground
        source={{ uri: 'https://imagizer.imageshack.com/img923/7238/i2y1St.png' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            <View style={styles.header}>
              <Image
                alt="App Logo"
                resizeMode="contain"
                style={styles.headerImg}
                source={{
                  uri: 'https://imagizer.imageshack.com/img923/3060/qqEsGj.png',
                }} />

              <Text style={styles.title}>
                Heureux de te retrouver
              </Text>

              <Text style={styles.subtitle}>
                Connecte-toi!
              </Text>
            </View>

            <View style={styles.form}>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Adresse E-mail</Text>
                <View style={styles.inputWithIcon}>
                  <Octicons name="mail" size={hp(2.7)} color="gray" style={styles.icon} />
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({ ...form, email })}
                    placeholder="exemple@exemple.com"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email}
                  />
                </View>
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Mot de passe</Text>
                <View style={styles.inputWithIcon}>
                  <Octicons name="lock" size={hp(2.7)} color="gray" style={styles.icon} />
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({ ...form, email })}
                    placeholder="*****"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.email}
                  />
                </View>
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Se connecter</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text style={styles.formLink}>Mot de passe oublié?</Text>
            </View>
          </KeyboardAwareScrollView>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Pas encore de compte?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>S'inscrire</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "85%",
    marginTop: "19%",
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#08BDBA',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#075eec',
    textDecorationLine: 'underline'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
    marginTop: 35
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 19,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
    marginTop: 15
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.15,
    marginBottom: 25
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  inputControl: {
    height: 50,
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
    marginTop: 20
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
