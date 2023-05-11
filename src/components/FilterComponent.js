import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Platform,
  FlatList,
  Button,
} from "react-native";
import { useState } from "react";

export default function FilterComponent(props) {
  const [showFilters, setShowFilters] = useState(false);
  const [types, setTypes] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedGenders, setCheckedGenders] = useState([]);
  // const { showFilters, setShowFilters } = props;

  function pressHandler() {
    console.log("presshandler");
    setShowFilters(true);
    return (
      <Modal animationType="slide" visible={showFilters}>
        <View style={filtersStyles.modalContent}>
          <View style={filtersStyles.modalHeader}>
            <Text style={filtersStyles.modalTitle}>Filters</Text>
            <Pressable
              style={filtersStyles.closeButton}
              onPress={() => setShowFilters(false)}
            >
              <Text style={filtersStyles.closeButtonText}>X</Text>
            </Pressable>
          </View>

          <View style={filtersStyles.modalBody}>
            <Text style={filtersStyles.filterTitle}>
              Type ({checkedTypes.length} selected)
            </Text>

            <FlatList
              data={types}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View style={filtersStyles.checkboxList}>
                  <CustomCheckBox
                    label={item}
                    checked={checkedTypes}
                    setChecked={setCheckedTypes}
                  />
                </View>
              )}
              numColumns={2}
              style={filtersStyles.typesList}
            />

            <Text style={filtersStyles.filterTitle}>
              Gender ({checkedGenders.length} selected)
            </Text>

            <FlatList
              data={["male", "female", "genderless"]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View style={filtersStyles.checkboxList}>
                  <CustomCheckBox
                    label={item}
                    checked={checkedGenders}
                    setChecked={setCheckedGenders}
                  />
                </View>
              )}
              numColumns={2}
              style={filtersStyles.genderList}
              testID="gender-filters"
            />
          </View>

          <View style={filtersStyles.modalFooter}>
            <Button
              type="primary"
              handlePress={() => {
                setCheckedTypes([]);
                setSelectedTypes([]);
                setCheckedGenders([]);
                setSelectedGenders([]);
                setShowFilters(false);
              }}
              style={filtersStyles.actionButton}
            >
              Reset
            </Button>
            <Button
              type="dark"
              handlePress={() => {
                setSelectedTypes([...checkedTypes]);
                setSelectedGenders([...checkedGenders]);
                setShowFilters(false);
              }}
              style={filtersStyles.actionButton}
            >
              Apply
            </Button>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      onPress={pressHandler}
    >
      <View style={styles.filterContainer}>
        <Text style={styles.filter}>filter</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    height: 40,
    width: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#403ed9",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
  },
  filter: {
    color: "white",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export const filtersStyles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    marginTop: 36,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 24,
    color: "#2e3156",
    fontWeight: "bold",
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  closeButtonText: {
    fontSize: 24,
  },
  modalBody: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  filterTitle: {
    color: "#2e3156",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  checkboxList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  typesList: {
    maxHeight: 300,
    padding: 10,
  },
  genderList: {
    padding: 10,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#cccccc",

    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -5,
          width: 0,
        },
      },
      android: {
        // elevation:   4,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
    }),
  },
  actionButton: {
    flexGrow: 1,
  },
});
