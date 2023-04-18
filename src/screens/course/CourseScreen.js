import Splash from '../sccul/SplashScreen'
import Title from '../../components/common/Title'
import { getBoughtCourses } from '../../utils/Axios'
import Courses from '../../components/course/Courses'
import SearchBar from '../../components/common/SearchBar'
import FilterCourse from '../../components/course/FilterCourse'
import React, { useState, useEffect, useCallback } from 'react'
import EmptyContainer from '../../components/common/EmptyContainer'
import { StyleSheet, View, RefreshControl, ScrollView } from 'react-native'

export default function CourseScreen({ route }) {
  const { filter } = route.params;
  const [courses, setCourses] = useState(null);
  const [progress, setProgress] = useState(0);
  const [inputText, setInputText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const fetchCourses = async () => {
    setIsLoading(true);
    const fetchedCourses = await getBoughtCourses();
    setCourses(fetchedCourses.courses);
    setProgress(fetchedCourses.progress);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const listOfCourses = () => {
    if (inputText === '') {
      if (filter === 'Todos') {
        return courses;
      } else if (filter === 'En progreso') {
        const progressSplit = progress.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.split(',');
          }
        });

        const progressInNumber = progressSplit.map((course) => {
          if (course !== null) {
            return course.map((section) => {
              if (section !== '') {
                return Number(section);
              } else {
                return null;
              }
            });
          } else {
            return null;
          }
        });

        const progressLength = progressInNumber.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.length - 1;
          }
        });

        const sectionsLength = courses.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.sections.length;
          }
        });

        const progressPercentage = progressLength.map((course, index) => {
          if (course === null) {
            return 0;
          } else {
            return (course / sectionsLength[index]) * 100;
          }
        });

        const coursesInProgress = progressPercentage.map((course, index) => {
          if (course === null) {
            return null;
          } else if (course > 0 && course < 100) {
            return courses[index];
          } else {
            return null;
          }
        });
        
        return coursesInProgress.filter((course) => course !== null);
      } else if (filter === 'Finalizados') {
        const progressSplit = progress.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.split(',');
          }
        });

        const progressInNumber = progressSplit.map((course) => {
          if (course !== null) {
            return course.map((section) => {
              if (section !== '') {
                return Number(section);
              } else {
                return null;
              }
            });
          } else {
            return null;
          }
        });

        const progressLength = progressInNumber.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.length - 1;
          }
        });

        const sectionsLength = courses.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.sections.length;
          }
        });

        const progressPercentage = progressLength.map((course, index) => {
          if (course === null) {
            return 0;
          } else {
            return (course / sectionsLength[index]) * 100;
          }
        });

        const coursesFinished = progressPercentage.map((course, index) => {
          if (course === null) {
            return null;
          } else if (course === 100) {
            return courses[index];
          } else {
            return null;
          }
        });
        
        return coursesFinished.filter((course) => course !== null);
      } else if (filter === 'Sin empezar') {
        const progressSplit = progress.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.split(',');
          }
        });

        const progressInNumber = progressSplit.map((course) => {
          if (course !== null) {
            return course.map((section) => {
              if (section !== '') {
                return Number(section);
              } else {
                return null;
              }
            });
          } else {
            return null;
          }
        });

        const progressLength = progressInNumber.map((course) => {
          if (course === null) {
            return 0;
          } else {
            return course.length - 1;
          }
        });

        const sectionsLength = courses.map((course) => {
          if (course === null) {
            return null;
          } else {
            return course.sections.length;
          }
        });

        const progressPercentage = progressLength.map((course, index) => {
          if (course === null) {
            return null;
          } else {
            return (course / sectionsLength[index]) * 100;
          }
        });

        const coursesNotStarted = progressPercentage.map((course, index) => {
          if (course === null) {
            return null;
          } else if (course === 0) {
            return courses[index];
          } else {
            return null;
          }
        });
        
        return coursesNotStarted.filter((course) => course !== null);
      }
    }

    return courses.filter((course) => {
      return course.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchCourses();
    setRefreshing(false);
  }, []);

  if (isLoading && !refreshing) {
    return <Splash />;
  }

  if (isLoading && refreshing) {
    return <Splash />;
  }

  return courses === null ? (
    <Splash />
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.content}>
        <Title title='Mis curso' />
      <SearchBar setInputValue={setInputText} value={inputText} />
      </View>
      {!courses.length ? (
        <EmptyContainer
          icon='tag-outline'
          type='material-community'
          text='No tienes cursos comprados'
        />
      ) : (
        <>
          <View style={styles.containerFilter}>
            <FilterCourse />
          </View>
          <View style={styles.container}>
            {listOfCourses().map((course) => (
              <Courses
                key={course.id}
                course={course}
                title={course.name}
                duration={course.sections}
                progress={progress[course.progressId]}
                image={course.image}
              />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerFilter: {
    marginTop: 20,
    marginLeft: 15,
  },
});
