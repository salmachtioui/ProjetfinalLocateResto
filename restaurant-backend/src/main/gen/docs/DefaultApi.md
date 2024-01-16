# DefaultApi

All URIs are relative to *https://restaurant_backend*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllUsers**](DefaultApi.md#getAllUsers) | **GET** /villes/villes/all | GET villes/villes/all |


<a name="getAllUsers"></a>
# **getAllUsers**
> List&lt;Ville&gt; getAllUsers()

GET villes/villes/all

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://restaurant_backend");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      List<Ville> result = apiInstance.getAllUsers();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#getAllUsers");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Ville&gt;**](Ville.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

