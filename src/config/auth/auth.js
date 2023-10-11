import passport from "passport";
import userModel from "../../Dao/DB/models/users.js";

const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true //Para permitir que se pueda usar el req
        },
        async (req, email, password, done) => {
            const {name , location, phone_number} = req.body;

            try {
                const user = await userModel.create({email, password, name, location, phone_number});
                
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )    
);

passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = await userModel.findOne({ email });
  
          if (!user) {
            return done(null, false, { message: 'The user doesnt exist.' });
          }
  
          const validation = await user.isValidPassword(password);
  
          if (!validation) {
            return done(null, false, { message: 'Wrong Password, try again.' });
          }
  
          return done(null, user, { message: 'User logged successfully!' });
        } catch (error) {
          return done(error);
        }
      }
    )
);

passport.use(
    new JWTstrategy(
      {
        secretOrKey: 'this_is_my_secret',
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
      },
      async (token, done) => {
        try {
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
);