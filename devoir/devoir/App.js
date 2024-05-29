import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const INITIAL_STATE = {
  name: '',
  firstName: '',
  matricule: '',
  searchQuery: ''
};

export default function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [originalStudents, setOriginalStudents] = useState([]); 
  const handleAdd = () => {
    if (formData.name && formData.firstName && formData.matricule) {
      const newStudent = { ...formData };
      setStudents([...students, newStudent]);
      setOriginalStudents([...students, newStudent]);
      setFormData(INITIAL_STATE);
    }
  };

  const handleDelete = () => {
    if (selectedStudentIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents.splice(selectedStudentIndex, 1);
      setStudents(updatedStudents);
      setOriginalStudents(updatedStudents);
      setSelectedStudentIndex(null);
    }
  };

  const handleEdit = () => {
    if (selectedStudentIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[selectedStudentIndex] = formData;
      setStudents(updatedStudents);
      setOriginalStudents(updatedStudents);
      setFormData(INITIAL_STATE);
      setSelectedStudentIndex(null);
    }
  };

  const handleSearch = () => {
    const { searchQuery } = formData;
    const filteredStudents = originalStudents.filter(student =>
      student.name.includes(searchQuery) ||
      student.firstName.includes(searchQuery) ||
      student.matricule.includes(searchQuery)
    );
    setStudents(filteredStudents);
  };

  const handleStudentPress = (index) => {
    setSelectedStudentIndex(index);
    setFormData(students[index]);
  };

  const renderStudentItem = ({ item, index }) => (
    <TouchableOpacity style={styles.studentItem} onPress={() => handleStudentPress(index)}>
      <Text style={styles.studentName}>{`${item.name} ${item.firstName}`}</Text>
      <Text style={styles.studentMatricule}>{item.matricule}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Gestion étudiant</Text>

        <View style={styles.inputSearchContainer}>
          <View style={styles.inputsContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Nom</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={value => setFormData({ ...formData, name: value })}
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Prénom</Text>
              <TextInput
                style={styles.input}
                value={formData.firstName}
                onChangeText={value => setFormData({ ...formData, firstName: value })}
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Matricule</Text>
              <TextInput
                style={styles.input}
                value={formData.matricule}
                onChangeText={value => setFormData({ ...formData, matricule: value })}
              />
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher"
              value={formData.searchQuery}
              onChangeText={value => setFormData({ ...formData, searchQuery: value })}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Text style={styles.buttonText}>Rechercher</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.actionButton} onPress={handleAdd}>
              <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
              <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={handleDelete}>
            <Text style={styles.buttonText}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Liste des étudiants */}
      <FlatList
        data={students}
        renderItem={renderStudentItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20, 
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  inputsContainer: {
    flex: 3,
    marginRight: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  fieldLabel: {
    fontSize: 16,
    width: 80, 
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'column', // Changed from 'row' to 'column'
    alignItems: 'flex-start',
  },
  searchInput: {
    width: '100%', // Make the search input take full width
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 10, // Add margin to separate from button
  },
  searchButton: {
    alignSelf: 'stretch', // Make the button take full width
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  deleteButton: {
    alignSelf: 'center',
    backgroundColor: '#FF0000',
  },
  studentItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studentMatricule: {
    fontSize: 14,
    color: 'gray',
  },
});
