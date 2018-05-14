export class CoursesService {
    getCourses() {
        return [
            {
                title: "Complete angular code",
                rating: "4.3434",
                students: "4400",
                price: "44.12",
                releaseDate: new Date(2018, 12, 14)
            },
            {
                title: "JDK code jam",
                rating: "5.3434",
                students: "5000",
                price: "55.12",
                releaseDate: new Date(2018, 12, 15)
            }
        ];
    }
}