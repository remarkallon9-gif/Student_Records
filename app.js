// ==========================================
// STUDENT RECORDS DATA PROCESSOR
// Pure JavaScript
// ==========================================

const students = [
    {
        id: 1,
        name: "John Cruz",
        year: 1,
        course: "Computer Science",
        grades: [85, 88, 90],
        enrolled: true
    },
    {
        id: 2,
        name: "Maria Santos",
        year: 2,
        course: "Information Technology",
        grades: [90, 92, 89],
        enrolled: true
    },
    {
        id: 3,
        name: "James Garcia",
        year: 3,
        course: "Engineering",
        grades: [88, 91, 86],
        enrolled: true
    },
    {
        id: 4,
        name: "Anna Reyes",
        year: 4,
        course: "Business",
        grades: [82, 85, 87],
        enrolled: true
    },
    {
        id: 5,
        name: "Mark Dela Cruz",
        year: 1,
        course: "Arts",
        grades: [78, 80, 82],
        enrolled: false
    },
    {
        id: 6,
        name: "Sofia Lopez",
        year: 2,
        course: "Computer Science",
        grades: [95, 94, 96],
        enrolled: true
    },
    {
        id: 7,
        name: "Daniel Ramos",
        year: 3,
        course: "Information Technology",
        grades: [87, 89, 91],
        enrolled: true
    },
    {
        id: 8,
        name: "Emily Torres",
        year: 4,
        course: "Engineering",
        grades: [92, 90, 94],
        enrolled: true
    },
    {
        id: 9,
        name: "Michael Flores",
        year: 1,
        course: "Business",
        grades: [80, 83, 81],
        enrolled: false
    },
    {
        id: 10,
        name: "Sarah Mendoza",
        year: 2,
        course: "Arts",
        grades: [88, 86, 90],
        enrolled: true
    },
    {
        id: 11,
        name: "Kevin Navarro",
        year: 3,
        course: "Computer Science",
        grades: [91, 93, 90],
        enrolled: true
    },
    {
        id: 12,
        name: "Lisa Aquino",
        year: 4,
        course: "Information Technology",
        grades: [84, 87, 89],
        enrolled: true
    },
    {
        id: 13,
        name: "Robert Castillo",
        year: 1,
        course: "Engineering",
        grades: [79, 82, 85],
        enrolled: false
    },
    {
        id: 14,
        name: "Jessica Tan",
        year: 2,
        course: "Business",
        grades: [90, 88, 92],
        enrolled: true
    },
    {
        id: 15,
        name: "Christopher Lim",
        year: 3,
        course: "Arts",
        grades: [76, 80, 84],
        enrolled: true
    },
    {
        id: 16,
        name: "Rachel Sy",
        year: 4,
        course: "Computer Science",
        grades: [96, 95, 94],
        enrolled: true
    },
    {
        id: 17,
        name: "Anthony Diaz",
        year: 1,
        course: "Information Technology",
        grades: [83, 85, 87],
        enrolled: true
    },
    {
        id: 18,
        name: "Nicole Fernandez",
        year: 2,
        course: "Engineering",
        grades: [89, 91, 90],
        enrolled: false
    },
    {
        id: 19,
        name: "Brian Valdez",
        year: 3,
        course: "Business",
        grades: [85, 87, 89],
        enrolled: true
    },
    {
        id: 20,
        name: "Angela Rivera",
        year: 4,
        course: "Arts",
        grades: [91, 89, 93],
        enrolled: true
    },
    {
        id: 21,
        name: "Joshua Perez",
        year: 1,
        course: "Computer Science",
        grades: [88, 90, 92],
        enrolled: true
    },
    {
        id: 22,
        name: "Grace Villanueva",
        year: 2,
        course: "Information Technology",
        grades: [93, 91, 95],
        enrolled: true
    },
    {
        id: 23,
        name: "Matthew Bautista",
        year: 3,
        course: "Engineering",
        grades: [86, 88, 90],
        enrolled: true
    },
    {
        id: 24,
        name: "Hannah Garcia",
        year: 4,
        course: "Business",
        grades: [94, 92, 90],
        enrolled: false
    },
    {
        id: 25,
        name: "Andrew Santos",
        year: 1,
        course: "Arts",
        grades: [81, 83, 85],
        enrolled: true
    },
    {
        id: 26,
        name: "Megan Cruz",
        year: 2,
        course: "Computer Science",
        grades: [90, 92, 94],
        enrolled: true
    },
    {
        id: 27,
        name: "Ryan Mendoza",
        year: 3,
        course: "Information Technology",
        grades: [86, 89, 88],
        enrolled: true
    },
    {
        id: 28,
        name: "Olivia Reyes",
        year: 4,
        course: "Engineering",
        grades: [95, 93, 96],
        enrolled: true
    },
    {
        id: 29,
        name: "Steven Torres",
        year: 1,
        course: "Business",
        grades: [79, 81, 84],
        enrolled: false
    },
    {
        id: 30,
        name: "Chloe Ramos",
        year: 2,
        course: "Arts",
        grades: [87, 89, 91],
        enrolled: true
    }
];


// ==========================================
// 1. GET AVERAGE GRADE
// ==========================================

function getAverageGrade(student) {
    if (
        !student ||
        !Array.isArray(student.grades) ||
        student.grades.length === 0
    ) {
        return 0;
    }

    const total = student.grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / student.grades.length;
}


// ==========================================
// 2. GET TOP STUDENTS
// ==========================================

function getTopStudents(students, n) {
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (n < 0) {
        throw new Error(
            "Number of students cannot be negative."
        );
    }

    return students
        .map(student => ({
            ...student,
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, n);
}


// ==========================================
// 3. GROUP BY COURSE
// ==========================================

function groupByCourse(students) {
    if (!Array.isArray(students)) {
        return {};
    }

    return students.reduce((groups, student) => {
        const course = student.course;

        if (!groups[course]) {
            groups[course] = [];
        }

        groups[course].push(student);

        return groups;
    }, {});
}


// ==========================================
// 4. GET ENROLLED COUNT
// ==========================================

function getEnrolledCount(students) {
    if (!Array.isArray(students)) {
        return {
            enrolled: 0,
            notEnrolled: 0
        };
    }

    const enrolled = students.filter(
        student => student.enrolled === true
    ).length;

    const notEnrolled = students.filter(
        student => student.enrolled === false
    ).length;

    return {
        enrolled: enrolled,
        notEnrolled: notEnrolled
    };
}


// ==========================================
// 5. FIND STUDENT
// ==========================================

function findStudent(students, name) {
    if (!Array.isArray(students) || !name) {
        return null;
    }

    const student = students.find(
        student =>
            student.name.toLowerCase() ===
            name.toLowerCase()
    );

    return student || null;
}


// ==========================================
// 6. GET COURSE AVERAGES
// ==========================================

function getCourseAverages(students) {
    if (
        !Array.isArray(students) ||
        students.length === 0
    ) {
        return [];
    }

    const grouped = groupByCourse(students);

    return Object.keys(grouped)
        .map(course => {
            const courseStudents = grouped[course];

            const totalAverage = courseStudents.reduce(
                (sum, student) =>
                    sum + getAverageGrade(student),
                0
            );

            return {
                course: course,
                average:
                    totalAverage / courseStudents.length
            };
        })
        .sort((a, b) => b.average - a.average);
}


// ==========================================
// 7. EXPORT SUMMARY
// ==========================================

function exportSummary(students) {
    if (
        !Array.isArray(students) ||
        students.length === 0
    ) {
        return {
            totalStudents: 0,
            overallAverage: 0,
            topPerformingStudent: null,
            breakdownByCourse: []
        };
    }

    const averages = students.map(
        student => getAverageGrade(student)
    );

    const overallAverage =
        averages.reduce(
            (sum, average) => sum + average,
            0
        ) / averages.length;

    const topStudent =
        getTopStudents(students, 1)[0];

    return {
        totalStudents: students.length,

        overallAverage:
            Number(overallAverage.toFixed(2)),

        topPerformingStudent: topStudent,

        breakdownByCourse:
            getCourseAverages(students)
    };
}


// ==========================================
// MAIN FUNCTION
// ==========================================

function main() {

    console.log(
        "=========================================="
    );

    console.log(
        "       STUDENT RECORDS DATA REPORT"
    );

    console.log(
        "=========================================="
    );


    // TOTAL STUDENTS
    console.log("\n--- TOTAL STUDENTS ---");

    console.log(
        "Total Students:",
        students.length
    );


    // ENROLLMENT
    console.log("\n--- ENROLLMENT ---");

    const enrollment =
        getEnrolledCount(students);

    console.log(
        "Enrolled:",
        enrollment.enrolled
    );

    console.log(
        "Not Enrolled:",
        enrollment.notEnrolled
    );


    // TOP STUDENTS
    console.log("\n--- TOP 5 STUDENTS ---");

    const topStudents =
        getTopStudents(students, 5);

    topStudents.forEach((student, index) => {

        console.log(
            ${index + 1}. ${student.name} - Average: ${student.average.toFixed(2)}
        );

    });


    // COURSE AVERAGES
    console.log("\n--- COURSE AVERAGES ---");

    const courseAverages =
        getCourseAverages(students);

    courseAverages.forEach(course => {

        console.log(
            ${course.course}: ${course.average.toFixed(2)}
        );

    });


    // GROUP BY COURSE
    console.log(
        "\n--- STUDENTS GROUPED BY COURSE ---"
    );

    const groups =
        groupByCourse(students);

    Object.keys(groups).forEach(course => {

        console.log(
            ${course}: ${groups[course].length} students
        );

    });


    // FIND STUDENT
    console.log("\n--- FIND STUDENT ---");

    const result =
        findStudent(students, "Maria Santos");

    if (result) {

        console.log(
            "Student Found:",
            result
        );

    } else {

        console.log(
            "Student not found."
        );

    }


    // SUMMARY
    console.log("\n--- SUMMARY ---");

    const summary =
        exportSummary(students);

    console.log(
        "Total Students:",
        summary.totalStudents
    );

    console.log(
        "Overall Average:",
        summary.overallAverage
    );

    console.log(
        "Top Performing Student:",
        summary.topPerformingStudent.name
    );

    console.log(
        "Top Student Average:",
        summary.topPerformingStudent.average.toFixed(2)
    );

    console.log(
        "Course Breakdown:",
        summary.breakdownByCourse
    );


    console.log(
        "\n=========================================="
    );

    console.log(
        "             END OF REPORT"
    );

    console.log(
        "=========================================="
    );
}


// ==========================================
// RUN PROGRAM
// ==========================================

main();