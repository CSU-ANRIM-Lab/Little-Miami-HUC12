# ACPF Datasets for Agricultural Conservation and Soil Health Assessment

## Overview

This repository provides essential datasets from the **Agricultural Conservation Planning Framework (ACPF)**, designed to support the assessment and planning of conservation practices within small watersheds (HUC12). The datasets help researchers, planners, and policymakers identify site-specific conservation opportunities, particularly for nutrient retention, runoff management, and soil health improvement in agricultural landscapes.

### What is the ACPF?

The ACPF is a set of geospatial tools developed to help identify site-specific conservation practices in agricultural watersheds. It provides a non-prescriptive menu of conservation options, assisting decision-makers in planning the most effective practices for improving water quality and enhancing soil health.

## Study Area

These datasets focus on agricultural landscapes in two critical watersheds: **Great Miami** and **Little Miami**, located in Southwest Ohio. Conservation practices, nutrient retention, and runoff assessments in these watersheds are essential for improving soil health and water quality in the region.

## How to Download the Dataset

To download the datasets, please visit [this link](https://csu-anrim-lab.github.io/Little-Miami-HUC12/). Each dataset is organized by HUC12 boundaries and is available as **zipped files** for each HUC12 watershed in the study area.

## Datasets Provided

Below are some of the key ACPF datasets included in the download.  They are in **shapefile** format.

### 1. Denitrifying Practices (Saturated Buffers)

- **Description**: This dataset contains information on the suitability of agricultural fields for implementing saturated buffers for nitrogen reduction. Fields are classified as suitable or unsuitable, with additional attributes detailing reasons for disqualification.
- **Attributes**:
  - `SatBuff`: (YES/NO) Indicates suitability for saturated buffers.
  - `Reason`: Reasons for disqualification (`NO` classification) include steep banks, soil characteristics (organic matter, coarse material), or poor drainage.

### 2. Riparian Function Assessment

- **Description**: This dataset classifies riparian areas based on their functional role in mitigating runoff and improving water quality. It provides a site-specific assessment of riparian buffer areas.
- **Attributes**:
  - `Critical Zone`: Areas critical for buffering.
  - `Deep Rooted Vegetation`: Areas suitable for deep-rooted vegetation.
  - `Multi-Species Buffer`, `Stiff Stemmed Grasses`, `Stream Bank Stabilization`: Zones recommended for specific riparian strategies.

### 3. Runoff Assessment

- **Description**: This dataset ranks agricultural fields based on their risk of runoff, considering slope steepness and proximity to streams. Fields are classified into four risk categories.
- **Attributes**:
  - `Risk Class`: A (Very High), B (High), C (Moderate), D (Low).

### 4. Soil Vulnerability Index (SVI)

- **Description**: This dataset classifies fields based on their vulnerability to surface and subsurface soil loss. It assesses the susceptibility of soils to erosion under various conditions.
- **Attributes**:
  - `SVI Surface Loss`: Classification of surface soil loss vulnerability, ranging from Low (1) to High (4).
  - `SVI Subsurface Loss`: Classification of subsurface loss vulnerability, ranging from Low (1) to High (4).

### 5. Depression Drainage Area

- **Description**: This dataset identifies drainage areas associated with depressions in the landscape. These areas are important for water collection and nutrient retention.

## How to Use the Data

The provided datasets are in **shapefile** format and can be easily integrated into GIS platforms such as **ArcGIS** or **QGIS**. They can be used for geospatial analysis, research, or planning, and can be combined with other datasets for multi-modal assessments.

### Example Applications

- **Conservation Planning**: Identify areas for implementing conservation practices such as saturated buffers, bioreactors, or riparian buffer zones based on field characteristics and proximity to water bodies.
- **Soil Health and Water Quality Assessment**: Use runoff risk and soil vulnerability data to evaluate soil health and prioritize areas for conservation.
- **Predictive Modeling**: Combine these datasets with remote sensing and environmental data to build predictive models that assess conservation impacts on nutrient retention and soil health.

## Licensing

The datasets are provided under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). Please review the license before use.

## Citation

If you use these datasets in your research or projects, please cite as follows:

> Salas, E.A.L. and Kumaran, S.S. 2024. ACPF Datasets for Agricultural Conservation and Soil Health Assessment, Great Miami and Little Miami Watersheds. Retrieved from [https://csu-anrim-lab.github.io/Little-Miami-HUC12](https://csu-anrim-lab.github.io/Little-Miami-HUC12/), [Accessed Date].

## Contact

For questions about data access or further information about the datasets, feel free to reach out:

- **Name**: [Eric Ariel L. Salas, Ph.D](mailto:esalas@centralstate.edu?subject=[GitHub]%20ACPF%20Dataset) or [Sakthi S. Kumaran, Ph.D.](mailto:ssubburayalu@centralstate.edu?subject=[GitHub]%20ACPF%20Dataset)
- **GitHub**: [CSU-ANRIM-Lab](https://github.com/CSU-ANRIM-Lab)
