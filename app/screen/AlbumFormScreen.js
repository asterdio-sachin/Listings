import React from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import FormField from "../components/FormField";
import { uploadAlbum, uploadPhoto } from "../redux/dataAction";
import routes from "../Navigation/routes";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  photoTitle: Yup.string().required().label("Photo Title"),
  url: Yup.string().required().label("url"),
  thumbnailUrl: Yup.string().required().label("thumbnail"),
});

const initialValues = {
  title: "",
  photoTitle: "",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

function AlbumFormScreen({ navigation }) {
  const users = useSelector((store) => store.data.users);

  const dispatch = useDispatch();

  const uploadPhotos = (photo, resetForm) => {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(photo),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(uploadPhoto(json));
        resetForm();
        ToastAndroid.show("Album Uploaded Successfully", ToastAndroid.SHORT);
        navigation.navigate(routes.ALBUMS);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (values, { resetForm }) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const album = { title: values.title, userId: randomUser.id };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(album),
    })
      .then((response) => response.json())
      .then(async (json) => {
        dispatch(uploadAlbum(json));
        const photo = {
          title: values.photoTitle,
          albumId: json.id,
          url: values.url,
          thumbnailUrl: values.thumbnailUrl,
        };
        uploadPhotos(photo, resetForm);
      })
      .catch((error) => {
        console.error(error);
        ToastAndroid.show(
          "Couldn't Upload the requested Album",
          ToastAndroid.SHORT
        );
      });
  };

  return (
    <Screen style={styles.container}>
      <ScreenHeader onPress={() => navigation.goBack()} title="Album Form" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormField title="Title" name="title" placeholder="Title" />
            <FormField
              title="Photo Title"
              name="photoTitle"
              placeholder="Photo Title"
            />
            <FormField
              title="Image Url"
              name="url"
              placeholder="url"
              editable={false}
            />
            <FormField
              title="Image Thumbnail Url"
              name="thumbnailUrl"
              placeholder="url"
              editable={false}
            />
            <AppButton title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#f8f4f4", paddingHorizontal: 10 },
});

export default AlbumFormScreen;
