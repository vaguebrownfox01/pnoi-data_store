# Pnoistor

Pnoistor is a web application designed to aid data collection for the [Phoi-phone project](https://github.com/vaguebrownfox01/pnoi-homepage). 

It serves as a centralized platform for organizing, managing, and validating the dataset of respiratory sounds recorded simultaneously from the mouth and chest, along with associated metadata.

## Purpose

Pnoistor is an essential component of the Phoi-phone project, facilitating the systematic collection and management of respiratory sound data and associated metadata.

It is built to ensure a streamlined data collection pipeline for the development of an AI model aimed at predicting pulmonary function test (PFT) values using respiratory sounds recorded simultaneously from the mouth and chest.

![Pnoistor app screenshot](/media/pnoistor-app_screen.png)

## Features

Pnoistor offers the following key features:

- **Centralized Data Organization**: Pnoistor provides a centralized platform to organize and manage the dataset of respiratory sounds recorded simultaneously from the mouth and chest. The data is uploaded and organised in cloud storage.

- **Metadata Recording**: The application allows the recording of subjects' metadata associated with the respiratory sound data. This metadata helps in further analysis and contextualizing the collected data.

- **Data File Renaming**: Pnoistor assists in automatically renaming data files to ensure consistency and ease of identification. The file nomeclature is defined in the [Pnoi annotation scheme](https://github.com/vaguebrownfox01/pnoi-corpus_ETL/tree/main/SCRIPTS/pnoi-anotest#annotation-scheme).

- **Data Validation**: Pnoistor aids in identifying missing data files, ensuring the completeness of the dataset and preventing data loss. Further tests are done using [pnoi-anotest](https://github.com/vaguebrownfox01/pnoi-corpus_ETL/tree/main/SCRIPTS/pnoi-anotest)

- **Authentication and Authorization**: Only authorized project team members can access the Pnoistor web application, providing a secure environment for data collection.

- **Device Compatibility**: Pnoistor is designed to be accessed and used on any device, ensuring flexibility and ease of use.

