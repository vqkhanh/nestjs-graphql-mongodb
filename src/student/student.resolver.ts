import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  //   @Query((returns) => StudentType)
  //   lesson(@Args('id') id: string) {
  //     return this.lessonService.getLesson(id);
  //   }

  //   @Query((returns) => [StudentType])
  //   lessons() {
  //     return this.lessonService.getLessons();
  //   }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
