using Microsoft.EntityFrameworkCore;
using CloudinaryDotNet;
using System;
using BackendForo.Database;
using BackendForo.Services;
using BackendForo.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext
builder.Services.AddDbContext<PhotoDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure AutoMapper
builder.Services.AddAutoMapper(typeof(Program));

// Configure Cloudinary
var cloudinaryAccount = new Account(
    builder.Configuration["Cloudinary:CloudName"],
    builder.Configuration["Cloudinary:ApiKey"],
    builder.Configuration["Cloudinary:ApiSecret"]);
builder.Services.AddSingleton(new Cloudinary(cloudinaryAccount));

// Register services
builder.Services.AddScoped<ICloudinaryService, CloudinaryService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();