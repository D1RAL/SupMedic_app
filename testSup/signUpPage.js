import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  useWindowDimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';

export default function SignUp() {
  const [form, setForm] = useState({
    nom: '',
    prenoms: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleSignUp = () => {
    const { nom, prenoms, email, password } = form;
    if (!nom || !prenoms || !email || !password) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }
    // handle sign up
    setErrorMessage('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#08BDBA" }}>
      <ImageBackground
        source={{ uri: 'https://imagizer.imageshack.com/img922/4957/7Mpl64.png' }}
        style={{ ...styles.backgroundImage, width, height: height * 0.9 }}
        resizeMode="cover"
      >
        <View style={{ ...styles.container, paddingVertical: height * 0.03 }}>
          <KeyboardAwareScrollView>
            <View style={{ ...styles.header, marginVertical: height * 0.045 }}>
              <Text style={{ ...styles.title, fontSize: width * 0.05 }}>
                <Text style={{ color: '#075eec' }}>INSCRIPTION</Text>
              </Text>
            </View>

            <View style={styles.form}>
              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}

              <View style={styles.input}>
                <Text style={{ ...styles.inputLabel, fontSize: width * 0.04 }}>Nom</Text>
                <View style={styles.inputWithIcon}>
                  <Octicons name="person" size={width * 0.07} color="gray" style={styles.icon} />
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={nom => setForm({ ...form, nom })}
                    placeholder=""
                    placeholderTextColor="#6b7280"
                    style={{ ...styles.inputControl, fontSize: width * 0.04 }}
                    value={form.nom}
                  />
                </View>
              </View>

              <View style={styles.input}>
                <Text style={{ ...styles.inputLabel, fontSize: width * 0.04 }}>Prénoms</Text>
                <View style={styles.inputWithIcon}>
                  <Octicons name="person" size={width * 0.07} color="gray" style={styles.icon} />
                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={prenoms => setForm({ ...form, prenoms })}
                    placeholder=""
                    placeholderTextColor="#6b7280"
                    style={{ ...styles.inputControl, fontSize: width * 0.04 }}
                    value={form.prenoms}
                  />
                </View>
              </View>

              <View style={styles.input}>
                <Text style={{ ...styles.inputLabel, fontSize: width * 0.04 }}>Adresse E-mail</Text>
                <View style={styles.inputWithIcon}>
                  <Octicons name="mail" size={width * 0.07} color="gray" style={styles.icon} />
                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={email => setForm({ ...form, email })}
                    placeholder="exemple@exemple.com"
                    placeholderTextColor="#6b7280"
                    style={{ ...styles.inputControl, fontSize: width * 0.04 }}
                    value={form.email}
                  />
                </View>
              </View>

              <View style={styles.input}>
                <Text style={{ ...styles.inputLabel, fontSize: width * 0.04 }}>Mot de passe</Text>
                <View style={styles.inputWithIcon}>
                  <Octicons name="lock" size={width * 0.07} color="gray" style={styles.icon} />
                  <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={password => setForm({ ...form, password })}
                    placeholder=""
                    placeholderTextColor="#6b7280"
                    style={{ ...styles.inputControl, fontSize: width * 0.04 }}
                    secureTextEntry={true}
                    value={form.password}
                  />
                </View>
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity onPress={handleSignUp}>
                  <View style={{ ...styles.btn, borderRadius: width * 0.08, paddingVertical: height * 0.015, paddingHorizontal: width * 0.05 }}>
                    <Text style={{ ...styles.btnText, fontSize: width * 0.045 }}>
                      S'inscrire
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ marginTop: 'auto' }}
          >
            <Text style={{ ...styles.formFooter, fontSize: 15 }}>
              Déjà un compte?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Se connecter</Text>
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
  },
  container: {
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontWeight: '700',
    color: '#08BDBA',
    marginBottom: 6,
    marginTop: 45,
  },
  subtitle: {
    fontWeight: '500',
    color: '#075eec',
    textDecorationLine: 'underline'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImg: {
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 5,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginTop: 20,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
    marginTop: 15,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 0.15,
    marginBottom: 25,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
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
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
    marginTop: 20,
  },
  btnText: {
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
});
