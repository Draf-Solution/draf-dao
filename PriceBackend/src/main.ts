import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./module/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder() //swagger page
    .setTitle("Price BE Server")
    .setDescription("Price BE Server")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/doc", app, document); //api function

  // app.setGlobalPrefix('api');
  //app.use("/screenshots", express.static(join(__dirname, "..", "screenshots")));

  await app.listen(3030);
}
bootstrap();
