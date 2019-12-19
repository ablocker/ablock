package com.example.ExamSys.controller;

import java.io.File;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.ExamSys.dao.QuestionAnswerRepository;
import com.example.ExamSys.dao.StudentRepository;
import com.example.ExamSys.dao.TeacherRepository;
import com.example.ExamSys.dao.TranscriptRepository;
import com.example.ExamSys.dao.UserRepository;
import com.example.ExamSys.domain.Student;
import com.example.ExamSys.domain.Teacher;
import com.example.ExamSys.domain.User;

@RestController
@RequestMapping("/admin")
public class AdminController {
	private final Logger log = LoggerFactory.getLogger(AdminController.class);
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	TeacherRepository teacherRepository;
	
	@Autowired
	QuestionAnswerRepository questionAnswerRepository;
	
	@Autowired
	TranscriptRepository transcriptRepository;

	/**
	 * 获取未激活的账户列表
	 * @return
	 */
	@RequestMapping(value = "/getUnactivatedList", method = RequestMethod.POST)
	public ResponseEntity<String> getUnactivatedList(){
		
		log.info("正在获取未激活账户列表");
		List<User> userSet = userRepository.findAllByEnabledFalse();
		log.info("获取未激活账户列表成功");
		JSONArray jsonArr = new JSONArray();
		for(User user : userSet) {
			try {
				JSONObject jsonObj = new JSONObject();
				jsonObj.put("login", user.getLogin());
				jsonObj.put("email", user.getEmail());
				jsonObj.put("phoneNumber", user.getPhoneNumber());
				jsonArr.put(jsonObj);
			} catch(Exception e) {
				e.printStackTrace();
				log.info(e.toString());
				return ResponseEntity.badRequest().body(null);
			}
		}
		
		return ResponseEntity.ok().body(jsonArr.toString());
	}
	
	/**
	 * 激活所选择的账户列表
	 * @param ids
	 * @return
	 */
	@PostMapping(value = "/activate")
	public ResponseEntity<Boolean> activate(@RequestBody List<String> logins){
		
		log.info("正在激活所选账户");
		try {
			userRepository.setEnabledTrueByIdIn(logins);
		} catch(Exception e) {
			log.info("账户激活失败");
			return ResponseEntity.badRequest().body(false);
		}
		log.info("账户激活完毕");
		
		return ResponseEntity.ok().body(true);
	}
	
	/**
	 * 获取学生列表
	 * @return
	 */
	@RequestMapping(value = "/getStudentList", method = RequestMethod.POST)
	public ResponseEntity<String> getStudentList(){
		log.info("正在获取学生列表");
		List<Student> studentList = studentRepository.findAllLazy();
		log.info("获取学生列表成功");
		JSONArray jsonArr = new JSONArray();
		for(Student student : studentList) {
			try {
				JSONObject jsonObj = new JSONObject();
				jsonObj.put("login", student.getUser().getLogin());
				jsonObj.put("email", student.getUser().getEmail());
				jsonObj.put("phoneNumber", student.getUser().getPhoneNumber());
				jsonObj.put("level", student.getLevel());
				jsonArr.put(jsonObj);
			} catch(Exception e) {
				e.printStackTrace();
				log.info(e.toString());
				return ResponseEntity.badRequest().body(null);
			}
		}
		return ResponseEntity.ok().body(jsonArr.toString());
	}
	
	/**
	 * 删除选择的学生账户
	 * @param logins
	 * @return
	 */
	@Transactional
	@RequestMapping(value = "/deleteStudentList", method = RequestMethod.POST)
	public ResponseEntity<Boolean> deleteStudentList(@RequestBody List<String> logins){
		log.info("正在删除所选学生");
		try {
			Student student = studentRepository.findOneByLogin(logins.get(0));
			if(student.getPhotoUrl() != null) {
				try {
					File file = new File(student.getPhotoUrl());
					file.delete();
				} catch(Exception e) {
					log.info(logins.get(0)+"个人照片删除失败");
				}
			}
			questionAnswerRepository.deleteByLogins(logins);
			transcriptRepository.deleteByLogins(logins);
			studentRepository.deleteByLogins(logins);
			userRepository.deleteByLogins(logins);
		} catch(Exception e) {
			e.printStackTrace();
			log.info("删除所选学生失败");
			return ResponseEntity.badRequest().body(false);
		}
		log.info("删除所选学生成功");
		return ResponseEntity.ok().body(true);
	}
	
	/**
	 * 删除选择的老师账户
	 * @param logins
	 * @return
	 */
	@Transactional
	@RequestMapping(value = "/deleteTeacherList", method = RequestMethod.POST)
	public ResponseEntity<Boolean> deleteTeacherList(@RequestBody List<String> logins){
		log.info("正在删除所选老师");
		try {
			Teacher teacher = teacherRepository.findOneByLogin(logins.get(0));
			if(teacher.getPhotoUrl() != null) {
				try {
					File file = new File(teacher.getPhotoUrl());
					file.delete();
				} catch(Exception e) {
					log.info(logins.get(0)+"个人照片删除失败");
				}
			}
			teacherRepository.deleteByLogins(logins);
			userRepository.deleteByLogins(logins);
		} catch(Exception e) {
			e.printStackTrace();
			log.info("删除所选老师失败");
			return ResponseEntity.badRequest().body(false);
		}
		log.info("删除所选老师成功");
		return ResponseEntity.ok().body(true);
	}
	/**
	 * 获取教师列表
	 * @return
	 */
	@RequestMapping(value = "/getTeacherList", method = RequestMethod.POST)
	public ResponseEntity<String> getTeacherList(){
		log.info("正在获取教师列表");
		List<Teacher> teacherList = teacherRepository.findAllLazy();
		log.info("获取教师列表成功");
		JSONArray jsonArr = new JSONArray();
		for(Teacher teacher : teacherList) {
			try {
				JSONObject jsonObj = new JSONObject();
				jsonObj.put("login", teacher.getUser().getLogin());
				jsonObj.put("email", teacher.getUser().getEmail());
				jsonObj.put("phoneNumber", teacher.getUser().getPhoneNumber());
				jsonArr.put(jsonObj);
			} catch(Exception e) {
				e.printStackTrace();
				log.info(e.toString());
				return ResponseEntity.badRequest().body(null);
			}
		}
		return ResponseEntity.ok().body(jsonArr.toString());
	}
}
