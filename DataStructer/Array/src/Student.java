public class Student {
    private String name;
    private int score;

    public Student(String studentName, int studentScore) {
        name = studentName;
        score = studentScore;
    }

    @Override
    public String toString() {
        return String.format("Student(name: %s, score: %d)", name, score);
    }

    public static void main(String[] args) {
        Array<Student> students = new Array<>();
        students.append(new Student("liujingzhao", 150));
        students.append(new Student("liujiale", 150));
        students.append(new Student("zhoujia", 150));
        System.out.println(students);
    }
}
