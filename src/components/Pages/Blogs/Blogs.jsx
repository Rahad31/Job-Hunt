import React from "react";
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto gap-4 my-4">
      <Helmet>
        <title>Job Hunt | Blog</title>
      </Helmet>
      <div className="bg-[#daf7fe] rounded-md p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Access Token</h1>
        <hr></hr>
        <p className="text-center pt-2">
          {" "}
          An access token is a credential that proves that the bearer has been
          authorized to access protected resources on behalf of the resource
          owner. It is typically a string of characters that is sent to the
          resource server in the Authorization header of an HTTP request. The
          resource server then verifies the access token to ensure that it is
          valid and has the necessary permissions to access the requested
          resource. Access tokens typically have a short lifespan, ranging from
          a few minutes to an hour, for security reasons.
        </p>
        <p className="text-center pt-2">
          {" "}
          Access tokens are short-lived credentials that are used to access
          protected resources. They are typically stored in memory or in a
          secure cookie on the client-side. When an access token expires, the
          client application can use the refresh token to request a new access
          token from the authorization server.
        </p>
      </div>
      <div className="bg-[#87CEEB] rounded-md p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Refresh Token</h1>
        <hr></hr>
        <p className="text-center pt-2">
          A refresh token is a long-lived credential that is used to obtain new
          access tokens. It is typically issued along with an access token when
          a user successfully authenticates. When an access token expires, the
          client application can use the refresh token to request a new access
          token from the authorization server. This allows the user to remain
          logged in without having to re-enter their credentials. Refresh tokens
          typically have a longer lifespan than access tokens, ranging from days
          to weeks or even months.
        </p>
        <p className="text-center pt-2">
          {" "}
          Refresh tokens are long-lived credentials that are used to obtain new
          access tokens. They are typically stored in a secure location on the
          client-side, such as in a secure storage mechanism or in a keystore.
          Refresh tokens should not be stored in plain text or in cookies, as
          they can be stolen and used to obtain new access tokens.
        </p>
      </div>

      <div className="bg-[#daf7fe] rounded-md p-4">
        <h1 className="text-2xl font-bold text-center mb-4"> Express.js</h1>
        <hr></hr>
        <p className="text-center pt-2">
          {" "}
          Express.js is a lightweight, unopinionated web application framework
          for Node.js. It provides a minimal set of features, including routing,
          middleware, and HTTP utilities, allowing developers to build flexible
          and scalable web applications. Express.js is widely used for building
          web servers, APIs, and single-page applications
        </p>
      </div>
      <div className="bg-[#87CEEB] rounded-md p-4">
        <h1 className="text-2xl font-bold text-center mb-4">NestJS</h1>
        <hr></hr>
        <p className="text-center pt-2">
          NestJS is a progressive Node.js framework for building efficient,
          scalable, and enterprise-grade server-side applications. It is built
          on top of Express.js and provides a more structured and opinionated
          approach to web development. NestJS leverages the
          Model-View-Controller (MVC) architecture, dependency injection, and
          TypeScript to create maintainable and testable applications.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
