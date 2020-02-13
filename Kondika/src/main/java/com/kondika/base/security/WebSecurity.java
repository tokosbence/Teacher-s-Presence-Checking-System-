package com.kondika.base.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static com.kondika.base.security.SecurityConstants.SIGN_UP_URL;

@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
    private UserDetailsService userDetailsService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public WebSecurity(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
        		.antMatchers(HttpMethod.GET,"/",
                        "/*.html",
                        "/favicon.ico",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js",  //Barmilyen formatumot nem hozz be ide kell berakni
                        "/**/*.json",
                        "/**/*.png",
                        "/**/*.jpg").permitAll()
                .antMatchers(HttpMethod.POST, SIGN_UP_URL).permitAll()
                .antMatchers(HttpMethod.GET,"/users/allusers").permitAll()
                .antMatchers(HttpMethod.POST, "/users/adduser").permitAll()
                .antMatchers(HttpMethod.POST, "/teachers/new").permitAll()
                .antMatchers(HttpMethod.POST,"/teachers/updateEmployer").permitAll()
                .antMatchers(HttpMethod.GET,"/teachers").permitAll()
                .antMatchers(HttpMethod.GET,"/lessonplans").permitAll()
                .antMatchers(HttpMethod.GET,"/lessonplans/getLessonplan/{lessonplanId}").permitAll()
                .antMatchers(HttpMethod.POST,"/lessonplans/new").permitAll()
                .antMatchers(HttpMethod.GET,"/lessonplans/deleteLessonplan/{lessonplanId}").permitAll()
                .antMatchers(HttpMethod.GET,"/classes/getClass/{classId}").permitAll()
                .antMatchers(HttpMethod.POST,"/classes/new").permitAll()
                .antMatchers(HttpMethod.POST,"/classes/updateClass").permitAll()
                .antMatchers(HttpMethod.GET,"/classes/deleteClass/{classId}").permitAll()
                .antMatchers(HttpMethod.GET,"/classes").permitAll()
                .antMatchers(HttpMethod.GET, "/rooms/getRoom/{roomId}").permitAll()
                .antMatchers(HttpMethod.POST, "/rooms/new").permitAll()
                .antMatchers(HttpMethod.POST, "/rooms/updateRoom").permitAll()
                .antMatchers(HttpMethod.GET, "/rooms/deleteRoom/{roomId}").permitAll()
                .antMatchers(HttpMethod.GET, "/rooms").permitAll()
                .antMatchers(HttpMethod.POST,"/logging/new").permitAll()
                .antMatchers(HttpMethod.GET, "/timetable/report").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilter(new JWTAuthenticationFilter(authenticationManager()))
                .addFilter(new JWTAuthorizationFilter(authenticationManager()));
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }
}